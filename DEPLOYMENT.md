# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your self-introduction presentation to GitHub Pages.

## 📋 Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git Installed**: Ensure Git is installed on your system
3. **Node.js**: Make sure Node.js (v16+) is installed

## 🔧 Setup Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click "New Repository" (green button)
3. Set repository name: `introduction` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Connect Local Repository to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
# Add GitHub remote origin
git remote add origin https://github.com/YOUR_USERNAME/introduction.git

# Verify remote is added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages (Automated Method)

The repository includes GitHub Actions workflow that will automatically deploy when you push to the main branch.

#### Enable GitHub Pages:
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under "Source", select **GitHub Actions**
5. The workflow will automatically deploy on the next push

### 4. Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Deploy manually using gh-pages
npm run deploy
```

**Note**: Manual deployment requires the remote origin to be configured first.

## 🌐 Access Your Site

After successful deployment, your site will be available at:
```
https://YOUR_USERNAME.github.io/introduction
```

The URL is also displayed in the GitHub Pages settings and in the deployment logs.

## 📝 Available Deployment Commands

```bash
# Build the application
npm run build

# Preview production build locally
npm run preview

# Deploy manually to GitHub Pages
npm run deploy

# Development server
npm run dev
```

## 🔄 Automated Deployment Workflow

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. **Triggers** on every push to main/master branch
2. **Builds** the application using `npm run build`
3. **Deploys** to GitHub Pages automatically
4. **Updates** the live site within a few minutes

### Workflow Features:
- ✅ Automatic dependency installation
- ✅ TypeScript compilation
- ✅ Production build optimization
- ✅ Automatic deployment to GitHub Pages
- ✅ Build artifact caching for faster deployments

## 🛠️ Configuration Details

### Package.json Configuration
```json
{
  "homepage": "https://pc261.github.io/introduction",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Vite Configuration
```typescript
export default defineConfig({
  base: '/introduction/',
  // ... other config
})
```

### React Router Configuration
```typescript
<BrowserRouter basename="/introduction">
  <App />
</BrowserRouter>
```

## 🐛 Troubleshooting

### Common Issues:

1. **404 Error on GitHub Pages**
   - Check that the repository is public
   - Verify GitHub Pages is enabled in repository settings
   - Ensure the `base` path in `vite.config.ts` matches your repository name

2. **Deployment Fails with "Failed to get remote.origin.url"**
   - Make sure you've added the GitHub remote origin
   - Run: `git remote add origin https://github.com/YOUR_USERNAME/introduction.git`

3. **Routes Don't Work on GitHub Pages**
   - This is normal for SPAs on GitHub Pages
   - The app uses client-side routing with proper basename configuration
   - Direct URL access to routes will redirect to the homepage, then navigate

4. **Build Fails**
   - Check for TypeScript errors: `npm run lint`
   - Ensure all dependencies are installed: `npm install`
   - Try cleaning node_modules: `rm -rf node_modules && npm install`

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite GitHub Pages Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 🔐 Security Note

The automated deployment uses GitHub's built-in `GITHUB_TOKEN` with minimal required permissions:
- `pages: write` - To deploy to GitHub Pages
- `id-token: write` - To verify deployment authenticity

No additional secrets or tokens are required!
