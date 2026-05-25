/**
 * Media Configuration - Runtime Version
 * 
 * PRODUCTION DEPLOYMENT INSTRUCTIONS:
 * ====================================
 * To update media URLs in production WITHOUT redeployment:
 * 
 * 1. Edit /public/media-config.json with new URLs
 * 2. Deploy ONLY the media-config.json file to your CDN/hosting
 * 3. Clear CDN cache if applicable
 * 4. No rebuild or redeploy of the application is needed!
 * 
 * The configuration will be fetched at runtime on each page load.
 * 
 * USAGE IN COMPONENTS:
 * ====================
 * import { useMediaConfig } from '../../config/media';
 * 
 * function MyComponent() {
 *   const { config, loading, error } = useMediaConfig();
 *   
 *   if (loading) return <div>Loading...</div>;
 *   if (error || !config) return <div>Error loading media</div>;
 *   
 *   return <img src={config.logos.company.main} alt="Logo" />;
 * }
 */

// Re-export the hook and types from the context
export { useMediaConfig, MediaConfigProvider } from '../app/contexts/MediaConfigContext';
export type { MediaConfig } from '../app/contexts/MediaConfigContext';

// DEPRECATED: These static exports are kept for backwards compatibility
// but should be replaced with useMediaConfig() hook in all components

export const VIDEOS = {
  hero: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/herovideo1.mp4',
  heroAlternative: 'https://videos.pexels.com/video-files/3141210/3141210-hd_1920_1080_25fps.mp4'
};

export const LOGOS = {
  company: {
    main: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/anandpag-logo.png'
  },
  partners: {
    sap: {
      hero: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/sap-partner.webp',
      socialProof: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/sap-partner.webp',
      credibility: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/sap-partner.webp',
      capabilities: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/sap-partner.webp'
    }
  },
  capabilities: {
    process: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  }
};

export const ABOUT_IMAGES = {
  collaboration: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop',
  teamMeeting: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop',
  workspace: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop',
  analytics: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop'
};

export const CAPABILITIES_IMAGES = {
  sap: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/sapcard.webp',
  processOptimization: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/processoptimization.webp',
  sharepoint: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/sharepointcard.webp',
  salesforce: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/crmcard.webp'
};

export const CASE_STUDY_IMAGES = {
  manufacturing: 'https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwYXV0b21hdGlvbiUyMGZhY3RvcnklMjBmbG9vcnxlbnwxfHx8fDE3NzEwNTE2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  lifeSciences: 'https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZXMlMjBib2FyZHJvb20lMjBtZWV0aW5nfGVufDF8fHx8MTc3MTA1MTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  energy: 'https://images.unsplash.com/photo-1638791859274-ff535025f92e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXRhJTIwY2VudGVyJTIwdGVjaG5vbG9neSUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MTA1MTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080'
};

export const PREMIUM_CASE_STUDY_IMAGES = {
  manufacturingAutomation: 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzcwOTMwNTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  retailInventory: 'https://images.unsplash.com/photo-1759197894183-ffffa3c7fcd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGludmVudG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwOTMwNTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  healthcareTechnology: 'https://images.unsplash.com/photo-1766299892693-2370a8d47e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaG9zcGl0YWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDkzMDUyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

export const TESTIMONIAL_IMAGES = {
  cfo: 'https://images.unsplash.com/photo-1659353220441-9207b962a133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNmbyUyMGV4ZWN1dGl2ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTAxMjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  ceo: 'https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwY2VvJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMDEyNjkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  executive: 'https://images.unsplash.com/photo-1769636929261-e913ed023c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGNvcnBvcmF0ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTAxMjY5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  generic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
};

export const PARTNER_TESTIMONIAL_IMAGES = {
  executiveWoman: 'https://images.unsplash.com/photo-1758599543120-4e462429a4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZSUyMGNvcnBvcmF0ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTAxMTgxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  executiveMale: 'https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbGUlMjBjaW8lMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzEwMTE4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  executiveLatina: 'https://images.unsplash.com/photo-1770627000564-3feb36aecbcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjBleGVjdXRpdmUlMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTAxMTgxMXww&ixlib=rb-4.1.0&q=80&w=1080'
};

export const CUSTOMER_LOGOS = {
  southernCaliforniaEdison: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop',
  cintas: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
  consumersEnergy: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop',
  pallCorporation: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
  wkKelloggFoundation: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop',
  farmersInsurance: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop'
};

export const PARTNER_LOGOS = {
  sap: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=100&fit=crop',
  microsoft: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=300&h=100&fit=crop'
};

export const MEGA_MENU_IMAGES = {
  solutions: {
    compliance: 'https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwb2ZmaWNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA5MjIwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    analytics: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA3OTY2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    processFactory: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjBmYWN0b3J5JTIwd29ya2Zsb3d8ZW58MXx8fHwxNzcwOTIyMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  industries: {
    manufacturing: 'https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzcwODM5MzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    healthcare: 'https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwODM5MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    retail: 'https://images.unsplash.com/photo-1761795084688-bb007bc51697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwODk1MTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    financial: 'https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBiYW5raW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA4OTU1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
};

export const PARTNER_CREDIBILITY_IMAGES = {
  sap: {
    card: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/sap-partner.webp'
  },
  microsoft: {
    card: 'https://images.unsplash.com/photo-1671944378859-08bcfa15a280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBhenVyZSUyMGNsb3VkJTIwY29tcHV0aW5nfGVufDF8fHx8MTc3MDk1NDMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    header: 'https://images.unsplash.com/photo-1671944378859-08bcfa15a280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBhenVyZSUyMGNsb3VkJTIwY29tcHV0aW5nfGVufDF8fHx8MTc3MDk1NDMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  salesforce: {
    card: 'https://images.unsplash.com/photo-1698759178588-ff05b12fba6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJsdWV8ZW58MXx8fHwxNzcwODkyMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    header: 'https://images.unsplash.com/photo-1698759178588-ff05b12fba6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJsdWV8ZW58MXx8fHwxNzcwODkyMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
};

export const HERO_FLOATING_ICONS = {
  sapLogo: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/sap-logo.webp'
};

export const ABOUT_US_PAGE_IMAGES = {
  teamPhoto: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwZGl2ZXJzZSUyMG9mZmljZXxlbnwxfHx8fDE3NzEyNTk5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  executives: {
    clientSuccess: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop',
    operations: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&h=800&fit=crop'
  },
  teamMembers: {
    sapHcm: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
    sapFinance: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop',
    utilities: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
    healthcare: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop',
    insurance: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
    lifeSciences: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'
  }
};

export const CAREERS_IMAGES = {
  team: 'https://images.unsplash.com/photo-1690383922983-90d7a4658ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVjaCUyMHRlYW0lMjBvZmZpY2UlMjBjYXN1YWwlMjBsYXVnaGluZ3xlbnwxfHx8fDE3NzEyNzAyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

export const BLOG_IMAGES = {
  s4hanaTransformation: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
  regulatoryCompliance: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
  mobileSolutions: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop',
  healthcareRevenue: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop'
};

export const TECHNOLOGY_IMAGES = {
  enterpriseTech: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwODY1MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  microsoft: 'https://images.unsplash.com/photo-1671944378859-08bcfa15a280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBhenVyZSUyMGNsb3VkJTIwY29tcHV0aW5nfGVufDF8fHx8MTc3MDk1NDMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  salesforce: 'https://images.unsplash.com/photo-1698759178588-ff05b12fba6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJsdWV8ZW58MXx8fHwxNzcwODkyMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};
