#!/usr/bin/env bash

# ==============================================================================
# VPS Setup Script for React + Vite App (ict-option-web)
# Targets: Ubuntu 20.04 / 22.04 / 24.04 LTS
# Run this script on your Contabo VPS as root or using sudo:
#   curl -sSL https://raw.githubusercontent.com/... (or copy paste)
# ==============================================================================

# Exit immediately if a command exits with a non-zero status
set -e

# Configuration variables
APP_NAME="ict-option-web"
DEPLOY_DIR="/var/www/${APP_NAME}"
NGINX_CONF="/etc/nginx/sites-available/${APP_NAME}"
NGINX_SYMLINK="/etc/nginx/sites-enabled/${APP_NAME}"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}===============================================${NC}"
echo -e "${BLUE}  Starting VPS Setup for ${APP_NAME}           ${NC}"
echo -e "${BLUE}===============================================${NC}"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}Please run this script with sudo or as root.${NC}"
  exit 1
fi

# Ask for domain or IP
read -p "Enter your domain name (e.g., example.com) or press Enter to use VPS IP: " DOMAIN_NAME
if [ -z "$DOMAIN_NAME" ]; then
  DOMAIN_NAME="_"
  echo -e "${YELLOW}Using default IP server name config ('_'). SSL will not be configured.${NC}"
else
  echo -e "${GREEN}Using domain: ${DOMAIN_NAME}${NC}"
fi

# 1. Update system packages
echo -e "\n${YELLOW}[1/6] Updating system packages...${NC}"
apt-get update && apt-get upgrade -y

# 2. Install basic dependencies (curl, git, ufw, nginx)
echo -e "\n${YELLOW}[2/6] Installing dependencies (Nginx, Git, UFW, Curl)...${NC}"
apt-get install -y curl git ufw nginx software-properties-common

# 3. Setup Firewall (UFW)
echo -e "\n${YELLOW}[3/6] Configuring Firewall...${NC}"
ufw allow OpenSSH
ufw allow 'Nginx Full'
echo "y" | ufw enable
ufw status

# 4. Create App Directories & Permissions
echo -e "\n${YELLOW}[4/6] Creating app directories and setting up permissions...${NC}"
mkdir -p "${DEPLOY_DIR}/dist"
# Create a dummy index.html so Nginx starts up correctly before first deploy
echo "<h1>Site is under construction - Initial VPS Setup Successful!</h1>" > "${DEPLOY_DIR}/dist/index.html"

# If a non-root deploy user is wanted, we can set ownership.
# For simplicity, we make sure www-data owns the directory for Nginx to read
chown -R www-data:www-data "${DEPLOY_DIR}"
chmod -R 755 "${DEPLOY_DIR}"

# 5. Create Nginx Configuration
echo -e "\n${YELLOW}[5/6] Creating Nginx Server block config...${NC}"

cat <<EOF > "${NGINX_CONF}"
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN_NAME} www.${DOMAIN_NAME};

    root ${DEPLOY_DIR}/dist;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/javascript;
    gzip_disable "MSIE [1-6]\.";

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Client-side router routing fallback
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Static assets caching
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    # Error handling
    error_page 404 /index.html;
}
EOF

# Symlink Nginx config
if [ ! -f "${NGINX_SYMLINK}" ]; then
  ln -s "${NGINX_CONF}" "${NGINX_SYMLINK}"
fi

# Remove default nginx config to avoid conflicts if we are using IP or standard port
if [ -f /etc/nginx/sites-enabled/default ]; then
  rm /etc/nginx/sites-enabled/default
fi

# Test Nginx and reload
nginx -t
systemctl restart nginx

# 6. Setup SSL with Certbot (if domain is provided and not default)
echo -e "\n${YELLOW}[6/6] Checking if SSL setup is possible...${NC}"
if [ "${DOMAIN_NAME}" != "_" ]; then
  echo -e "${YELLOW}Installing Certbot...${NC}"
  apt-get install -y python3-certbot-nginx
  
  echo -e "${GREEN}Would you like to install Let's Encrypt SSL certificate for ${DOMAIN_NAME} right now?${NC}"
  echo -e "${RED}Warning: Ensure your domain DNS is already pointing to this VPS IP address!${NC}"
  read -p "Run Certbot SSL configuration? (y/n): " RUN_CERTBOT
  
  if [ "$RUN_CERTBOT" = "y" ] || [ "$RUN_CERTBOT" = "Y" ]; then
    certbot --nginx -d "${DOMAIN_NAME}" -d "www.${DOMAIN_NAME}"
    systemctl reload nginx
    echo -e "${GREEN}SSL configured successfully!${NC}"
  else
    echo -e "${YELLOW}Skipping Certbot configuration. You can run it later via: sudo certbot --nginx${NC}"
  fi
else
  echo -e "${YELLOW}Skipping SSL. Certbot requires a valid registered domain pointing to this server's IP.${NC}"
fi

echo -e "\n${GREEN}===============================================${NC}"
echo -e "${GREEN}  VPS Initial Setup Completed Successfully!     ${NC}"
echo -e "${GREEN}===============================================${NC}"
echo -e "Your web directory is: ${DEPLOY_DIR}"
echo -e "Nginx configuration created at: ${NGINX_CONF}"
if [ "${DOMAIN_NAME}" != "_" ]; then
  echo -e "Once DNS propagates, your app will be accessible at: http://${DOMAIN_NAME}"
else
  echo -e "Your app is accessible via the VPS IP address: http://<your_vps_ip>"
fi
echo -e "==============================================="
