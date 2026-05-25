# Vercel Deployment Checklist

## ✅ Pre-Deployment Checklist

### Files Created/Updated
- [x] `/index.html` - HTML entry point with SEO meta tags
- [x] `/src/main.tsx` - Application entry point
- [x] `/vercel.json` - Vercel deployment configuration
- [x] `/.vercelignore` - Files to exclude from deployment
- [x] `/README.md` - Deployment instructions
- [x] `/public/favicon.svg` - Site favicon
- [x] `package.json` - Added preview script

### Configuration Verified
- [x] React Router setup with scroll restoration
- [x] Vite build configuration
- [x] SPA routing rewrites in vercel.json
- [x] Security headers configured
- [x] Asset caching configured
- [x] Build command: `npm run build`
- [x] Output directory: `dist`

## 🚀 Deployment Steps

### Method 1: Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy to production
vercel --prod
```

### Method 2: GitHub Integration (Recommended for CI/CD)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ready for deployment"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect settings from vercel.json

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Get your production URL

### Method 3: Vercel Dashboard (Manual Upload)

1. Build locally:
   ```bash
   npm run build
   ```

2. Go to https://vercel.com/new
3. Click "Deploy" and drag the `dist` folder
4. Wait for deployment

## 🔍 Post-Deployment Verification

### Test These URLs
- [ ] Homepage: `https://your-domain.vercel.app/`
- [ ] About: `https://your-domain.vercel.app/company/about`
- [ ] Solutions: `https://your-domain.vercel.app/solutions/erc`
- [ ] Case Studies: `https://your-domain.vercel.app/resources/case-studies`
- [ ] Contact: `https://your-domain.vercel.app/company/contact`

### Test Features
- [ ] Navigation works (header menu)
- [ ] Routing works (all pages load)
- [ ] Back button restores scroll position
- [ ] Forward navigation scrolls to top
- [ ] Images load correctly
- [ ] Animations work smoothly
- [ ] Mobile responsive
- [ ] Smooth scroll (Lenis) works

### Performance Check
- [ ] Run Lighthouse audit (aim for 90+ on all metrics)
- [ ] Check page load speed (< 3 seconds)
- [ ] Verify assets are cached properly
- [ ] Test on mobile device

## 🔧 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Routes Return 404
- Verify `vercel.json` exists with rewrite rules
- Check build logs in Vercel dashboard
- Ensure React Router is configured correctly

### Images Not Loading
- Check Unsplash URLs are accessible
- Verify Figma assets are in project
- Check browser console for errors

### Performance Issues
- Enable Vercel's edge caching
- Check bundle size (use `npm run build` and check dist folder)
- Optimize images if needed

## 📊 Expected Build Output

```
✓ 1234 modules transformed.
dist/index.html                   2.34 kB
dist/assets/index-abc123.css     45.67 kB
dist/assets/index-xyz789.js     234.56 kB
✓ built in 12.34s
```

## 🌐 Custom Domain Setup (Optional)

1. Go to Vercel project settings
2. Click "Domains"
3. Add your custom domain (e.g., anandpag.com)
4. Update DNS records as instructed
5. Wait for SSL certificate to be issued

## 📈 Monitoring

After deployment, set up:
- [ ] Vercel Analytics (built-in)
- [ ] Error tracking (Sentry, optional)
- [ ] Performance monitoring
- [ ] Uptime monitoring

## 🎉 Success!

Your app is now live on Vercel with:
✅ Automatic HTTPS
✅ Global CDN
✅ Continuous deployment
✅ Zero configuration
✅ Instant rollbacks

Production URL: https://your-project.vercel.app
