# Media Configuration - Production Update Guide

## Overview

The Anand PAG Inc. website uses a **runtime media configuration** system that allows you to update all media URLs (images, videos, logos) in production **WITHOUT rebuilding or redeploying the entire application**.

## How It Works

All media URLs are stored in `/public/media-config.json`, which is:
- ✅ Fetched at runtime when users visit the site
- ✅ Not compiled into the JavaScript bundle
- ✅ Can be updated independently from the application code
- ✅ Changes take effect immediately after CDN cache clear

## Production Update Instructions

### Step 1: Edit the Configuration File

1. Locate `/public/media-config.json` in your production environment
2. Update the URLs you want to change. Example:

```json
{
  "logos": {
    "company": {
      "main": "https://your-new-cdn.com/logo.png"
    }
  }
}
```

### Step 2: Deploy Only the JSON File

**Option A: Direct File Upload**
- Upload the updated `media-config.json` to your hosting provider
- Replace the existing file at `/public/media-config.json`

**Option B: CDN Update**
- If using a CDN (CloudFront, Cloudflare, etc.), upload to the origin
- Invalidate the cache for `/media-config.json`

**Option C: Vercel/Netlify**
```bash
# Deploy only the public folder
vercel --prod public/
# or
netlify deploy --prod --dir=public
```

### Step 3: Clear CDN Cache (if applicable)

```bash
# CloudFront example
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/media-config.json"

# Cloudflare example
curl -X POST "https://api.cloudflare.com/client/v4/zones/ZONE_ID/purge_cache" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{"files":["https://yourdomain.com/media-config.json"]}'
```

### Step 4: Verify Changes

1. Open your website
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser Network tab to confirm new JSON is loaded
4. Verify images/logos are displaying correctly

## Configuration Structure

The `media-config.json` follows this structure:

```json
{
  "videos": {
    "hero": "URL",
    "heroAlternative": "URL"
  },
  "logos": {
    "company": { "main": "URL" },
    "partners": {
      "sap": {
        "hero": "URL",
        "socialProof": "URL",
        "credibility": "URL",
        "capabilities": "URL"
      }
    }
  },
  "aboutImages": { ... },
  "capabilitiesImages": { ... },
  "caseStudyImages": { ... },
  "testimonialImages": { ... },
  "megaMenuImages": { ... }
}
```

## Development Workflow

### Adding New Media Assets

1. Add the URL to `/public/media-config.json`
2. Update the TypeScript interface in `/src/app/contexts/MediaConfigContext.tsx`
3. Use in components via the hook:

```tsx
import { useMediaConfig } from '../../config/media';

function MyComponent() {
  const { config } = useMediaConfig();
  
  return <img src={config.logos.company.main} alt="Logo" />;
}
```

## Best Practices

### ✅ DO:
- Use CDN URLs for all media assets (S3, Cloudflare R2, etc.)
- Keep file names consistent when updating (helps with caching)
- Test changes in staging before production
- Back up the JSON file before making changes
- Use descriptive keys for new media entries

### ❌ DON'T:
- Commit sensitive URLs or API keys to the JSON file
- Use relative paths (always use full URLs)
- Update URLs during high-traffic periods without testing
- Remove keys that components depend on

## Rollback Procedure

If you need to rollback to previous URLs:

1. Retrieve the backup of `media-config.json`
2. Deploy the backup file
3. Clear CDN cache
4. Verify the site is working correctly

## Monitoring

Monitor these metrics after updating:
- Page load time (should not significantly change)
- Image loading errors in browser console
- CDN cache hit rates
- User error reports

## Emergency Contacts

If media updates cause issues:
1. Rollback using backup file
2. Check CDN cache status
3. Verify JSON syntax at jsonlint.com
4. Check browser console for specific errors

## FAQs

**Q: Do I need to rebuild the app when adding new images?**
A: No, just add the URL to `media-config.json` and deploy it.

**Q: How long does it take for changes to appear?**
A: Immediately after CDN cache clear (or 5-15 minutes without cache clear).

**Q: Can I use environment variables?**
A: No, this JSON file doesn't support environment variables. Use full URLs only.

**Q: What if the JSON file fails to load?**
A: The app will show a loading/error state. Check network connectivity and JSON syntax.

---

**Last Updated:** February 2026  
**Maintained by:** Anand PAG Inc. Development Team
