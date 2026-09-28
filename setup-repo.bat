@echo off
echo ========================================
echo CareerReady AI - GitHub Repo Setup
echo ========================================
echo.

cd /d "%~dp0"

echo Initializing Git repository...
git init

echo.
echo Adding remote origin...
echo Please enter your GitHub repository URL:
set /p repo_url="Repository URL (e.g., https://github.com/username/career-ready-ai.git): "

if "%repo_url%"=="" (
    echo Skipping remote setup. You can add it later with:
    echo git remote add origin https://github.com/username/career-ready-ai.git
) else (
    git remote add origin %repo_url%
)

echo.
echo Adding all files...
git add .

echo.
echo Creating initial commit...
git commit -m "Initial commit: CareerReady AI Platform"

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create a new repository on GitHub
echo 2. Run this script again with your repo URL
echo    OR manually run:
echo    git remote add origin YOUR_REPO_URL
echo    git push -u origin main
echo.
pause
