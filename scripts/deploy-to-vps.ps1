# ==============================================================================
# Windows PowerShell Deployment Script for React + Vite (ict-option-web)
# This script builds your project locally and deploys it to your Contabo VPS via SCP.
# ==============================================================================

# Exit on error
$ErrorActionPreference = "Stop"

# Configuration
$AppName = "ict-option-web"
$LocalDistFolder = "dist"
$RemoteDir = "/var/www/ict-option-web/dist"

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "  Deploying $AppName to Contabo VPS" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

# 1. Ask for VPS details (cache them in variables or read from CLI input)
$vpsIp = Read-Host "Enter your VPS IP Address"
if ([string]::IsNullOrEmpty($vpsIp)) {
    Write-Host "Error: VPS IP is required." -ForegroundColor Red
    exit 1
}

$vpsUser = Read-Host "Enter SSH Username [default: root]"
if ([string]::IsNullOrEmpty($vpsUser)) {
    $vpsUser = "root"
}

$vpsPort = Read-Host "Enter SSH Port [default: 22]"
if ([string]::IsNullOrEmpty($vpsPort)) {
    $vpsPort = "22"
}

# 2. Build the project locally
$buildChoice = Read-Host "Do you want to build the project locally before deploying? (y/n) [default: y]"
if ([string]::IsNullOrEmpty($buildChoice) -or $buildChoice -eq "y" -or $buildChoice -eq "Y") {
    Write-Host "`n[1/3] Building React application..." -ForegroundColor Yellow
    
    # Check if node_modules exists, if not, run npm install
    if (-not (Test-Path "node_modules")) {
        Write-Host "node_modules not found. Running npm install..." -ForegroundColor Yellow
        npm install
    }
    
    # Run the build command
    npm run build
    Write-Host "Build complete!" -ForegroundColor Green
} else {
    Write-Host "`n[1/3] Skipping build step. Uploading existing 'dist' directory." -ForegroundColor Yellow
}

# Ensure dist directory exists locally
if (-not (Test-Path $LocalDistFolder)) {
    Write-Host "Error: Local '$LocalDistFolder' directory does not exist. Please build the project first." -ForegroundColor Red
    exit 1
}

# 3. Upload to VPS
Write-Host "`n[2/3] Uploading 'dist' files to VPS..." -ForegroundColor Yellow
Write-Host "Uploading to: $vpsUser@$vpsIp:$RemoteDir" -ForegroundColor Blue

# Create remote directory first and clear old files
Write-Host "Preparing remote directory..." -ForegroundColor Yellow
ssh -p $vpsPort "$vpsUser@$vpsIp" "mkdir -p /var/www/$AppName && rm -rf $RemoteDir/*"

# SCP files (recursive upload)
# Note: On Windows, SCP is built-in to PowerShell 5.1+ and Windows 10/11 OpenSSH client.
Write-Host "Copying files via SCP..." -ForegroundColor Yellow
scp -P $vpsPort -r "$LocalDistFolder/*" "$vpsUser@$vpsIp:$RemoteDir"

# 4. Set correct permissions on the server
Write-Host "`n[3/3] Setting remote permissions..." -ForegroundColor Yellow
ssh -p $vpsPort "$vpsUser@$vpsIp" "chown -R www-data:www-data /var/www/$AppName && chmod -R 755 /var/www/$AppName && systemctl reload nginx"

Write-Host "`n=============================================" -ForegroundColor Green
Write-Host "  Deployment Successful!" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
Write-Host "Files uploaded to: $RemoteDir"
Write-Host "Nginx reloaded."
Write-Host "============================================="
