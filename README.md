# Anand PAG Inc. - Enterprise Website

Modern, production-ready enterprise website built with React, TypeScript, Tailwind CSS v4, and React Router.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📦 Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to Git**
   - GitHub, GitLab, or Bitbucket

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Vercel will auto-detect settings from `vercel.json`

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy

### Option 3: Deploy via GitHub Integration

1. **Connect GitHub repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Select your GitHub repository

2. **Configure (Auto-detected)**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch

## 🔧 Vercel Configuration

The project includes a `vercel.json` file with:

✅ **SPA Routing** - All routes redirect to `index.html` for client-side routing  
✅ **Asset Caching** - Static assets cached for 1 year  
✅ **Security Headers** - XSS protection, content type sniffing prevention, frame options  
✅ **Build Settings** - Optimized build command and output directory

## 📁 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom hooks
│   │   ├── routes.ts        # React Router configuration
│   │   └── Root.tsx         # Root layout component
│   ├── config/
│   │   └── media.ts         # Centralized media assets
│   ├── styles/              # Global styles
│   └── main.tsx             # Application entry point
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── vercel.json              # Vercel deployment config
└── package.json             # Dependencies and scripts
```

## 🎨 Features

- ✅ **React 18.3** with TypeScript
- ✅ **React Router 7** for routing with scroll restoration
- ✅ **Tailwind CSS v4** for styling
- ✅ **Lenis** smooth scroll
- ✅ **Motion** (Framer Motion) for animations
- ✅ **Radix UI** components
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- ✅ **Performance Optimized** - Code splitting, lazy loading

## 🌐 Environment Variables

No environment variables required for basic deployment. The app uses:
- Unsplash images (public URLs)
- Figma assets (bundled)

## 📊 Performance

- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## 🔒 Security

Security headers are configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📝 Build Output

After running `npm run build`, the production-ready files are in the `dist/` directory:
- Minified JavaScript bundles
- Optimized CSS
- Compressed assets
- Source maps (for debugging)

## 🐛 Troubleshooting

### Build fails on Vercel

1. Check Node.js version (should be 18+ or 20+)
2. Clear Vercel cache: `vercel --force`
3. Check build logs in Vercel dashboard

### Routes return 404

- Ensure `vercel.json` has the rewrite rule
- Check React Router configuration in `routes.ts`

### Images not loading

- Check `media.ts` for correct image URLs
- Verify Unsplash URLs are accessible
- Check Figma assets are in the project

## 📞 Support

For issues or questions:
- Check Vercel deployment logs
- Review Vite build output
- Contact development team

## 📄 License

Proprietary - Anand PAG Inc. © 2026
