#!/usr/bin/env bash

# ==============================================================================
# Bash Deployment Script for React + Vite (ict-option-web)
# This script builds your project locally and deploys it to your Contabo VPS via SCP.
# ==============================================================================

# Exit on error
set -e

# Configuration
APP_NAME="ict-option-web"
LOCAL_DIST="dist"
REMOTE_DIR="/var/www/ict-option-web/dist"

echo -e "\033[0;36m=============================================\033[0m"
echo -e "\033[0;36m  Deploying ${APP_NAME} to Contabo VPS       \033[0m"
echo -e "\033[0;36m=============================================\033[0m"

# 1. Ask for VPS details
read -p "Enter your VPS IP Address: " VPS_IP
if [ -z "$VPS_IP" ]; then
  echo -e "\033[0;31mError: VPS IP is required.\033[0m"
  exit 1
fi

read -p "Enter SSH Username [default: root]: " VPS_USER
VPS_USER=${VPS_USER:-root}

read -p "Enter SSH Port [default: 22]: " VPS_PORT
VPS_PORT=${VPS_PORT:-22}

# 2. Build the project locally
read -p "Do you want to build the project locally before deploying? (y/n) [default: y]: " BUILD_CHOICE
BUILD_CHOICE=${BUILD_CHOICE:-y}

if [ "$BUILD_CHOICE" = "y" ] || [ "$BUILD_CHOICE" = "Y" ]; then
  echo -e "\n\033[1;33m[1/3] Building React application...\033[0m"
  
  if [ ! -d "node_modules" ]; then
    echo -e "\033[1;33mnode_modules not found. Running npm install...\033[0m"
    npm install
  fi
  
  npm run build
  echo -e "\033[0;32mBuild complete!\033[0m"
else
  echo -e "\n\033[1;33m[1/3] Skipping build step. Uploading existing 'dist' directory.\033[0m"
fi

# Ensure dist directory exists locally
if [ ! -d "$LOCAL_DIST" ]; then
  echo -e "\033[0;31mError: Local '$LOCAL_DIST' directory does not exist. Please build the project first.\033[0m"
  exit 1
fi

# 3. Upload to VPS
echo -e "\n\033[1;33m[2/3] Uploading 'dist' files to VPS...\033[0m"
echo -e "\033[0;34mUploading to: ${VPS_USER}@${VPS_IP}:${REMOTE_DIR}\033[0m"

# Create remote directory and clear old files
echo -e "\033[1;33mPreparing remote directory...\033[0m"
ssh -p "$VPS_PORT" "${VPS_USER}@${VPS_IP}" "mkdir -p /var/www/${APP_NAME} && rm -rf ${REMOTE_DIR}/*"

# SCP files
echo -e "\033[1;33mCopying files via SCP...\033[0m"
scp -P "$VPS_PORT" -r "${LOCAL_DIST}/"* "${VPS_USER}@${VPS_IP}:${REMOTE_DIR}/"

# 4. Set correct permissions on the server
echo -e "\n\033[1;33m[3/3] Setting remote permissions...\033[0m"
ssh -p "$VPS_PORT" "${VPS_USER}@${VPS_IP}" "chown -R www-data:www-data /var/www/${APP_NAME} && chmod -R 755 /var/www/${APP_NAME} && systemctl reload nginx"

echo -e "\n\033[0;32m=============================================\033[0m"
echo -e "\033[0;32m  Deployment Successful!\033[0m"
echo -e "\033[0;32m=============================================\033[0m"
echo "Files uploaded to: ${REMOTE_DIR}"
echo "Nginx reloaded."
echo -e "\033[0;32m=============================================\033[0m"
