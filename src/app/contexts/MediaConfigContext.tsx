import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Fallback static imports
import * as StaticMedia from '../../config/media-fallback';

// Type definition for the media config structure
export interface MediaConfig {
  videos: {
    hero: string;
    heroAlternative: string;
  };
  logos: {
    company: {
      main: string;
    };
    partners: {
      sap: {
        hero: string;
        socialProof: string;
        credibility: string;
        capabilities: string;
      };
    };
    capabilities: {
      process: string;
    };
  };
  aboutImages: {
    collaboration: string;
    teamMeeting: string;
    workspace: string;
    analytics: string;
  };
  capabilitiesImages: {
    sap: string;
    processOptimization: string;
    sharepoint: string;
    salesforce: string;
  };
  caseStudyImages: {
    manufacturing: string;
    lifeSciences: string;
    energy: string;
  };
  premiumCaseStudyImages: {
    manufacturingAutomation: string;
    retailInventory: string;
    healthcareTechnology: string;
  };
  testimonialImages: {
    cfo: string;
    ceo: string;
    executive: string;
    generic: string;
  };
  partnerTestimonialImages: {
    executiveWoman: string;
    executiveMale: string;
    executiveLatina: string;
  };
  customerLogos: {
    southernCaliforniaEdison: string;
    cintas: string;
    consumersEnergy: string;
    pallCorporation: string;
    wkKelloggFoundation: string;
    farmersInsurance: string;
  };
  partnerLogos: {
    sap: string;
    microsoft: string;
  };
  megaMenuImages: {
    solutions: {
      compliance: string;
      analytics: string;
      processFactory: string;
    };
    industries: {
      manufacturing: string;
      healthcare: string;
      retail: string;
      financial: string;
    };
  };
  partnerCredibilityImages: {
    sap: {
      card: string;
    };
    microsoft: {
      card: string;
      header: string;
    };
    salesforce: {
      card: string;
      header: string;
    };
  };
  heroFloatingIcons: {
    sapLogo: string;
  };
  aboutUsPageImages: {
    teamPhoto: string;
    executives: {
      clientSuccess: string;
      operations: string;
    };
    teamMembers: {
      sapHcm: string;
      sapFinance: string;
      utilities: string;
      healthcare: string;
      insurance: string;
      lifeSciences: string;
    };
  };
  careersImages: {
    team: string;
  };
  blogImages: {
    s4hanaTransformation: string;
    regulatoryCompliance: string;
    mobileSolutions: string;
    healthcareRevenue: string;
  };
  technologyImages: {
    enterpriseTech: string;
    microsoft: string;
    salesforce: string;
  };
}

interface MediaConfigContextType {
  config: MediaConfig;
  loading: boolean;
  error: Error | null;
}

const MediaConfigContext = createContext<MediaConfigContextType>({
  config: StaticMedia.MEDIA_CONFIG_FALLBACK,
  loading: true,
  error: null,
});

export function MediaConfigProvider({ children }: { children: ReactNode }) {
  // Start with fallback config immediately - config is NEVER null
  const [config, setConfig] = useState<MediaConfig>(StaticMedia.MEDIA_CONFIG_FALLBACK);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Try to fetch the runtime config from public folder
    fetch('/media-config.json', {
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load media config: ${response.statusText}`);
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON, using static config');
        }
        return response.json();
      })
      .then((data) => {
        console.log('✅ Loaded runtime media config from /media-config.json');
        setConfig(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn('⚠️ Runtime config not available, using static fallback:', err.message);
        // Already using fallback, just set loading to false
        setLoading(false);
      });
  }, []);

  return (
    <MediaConfigContext.Provider value={{ config, loading, error }}>
      {children}
    </MediaConfigContext.Provider>
  );
}

/**
 * Hook to access media configuration at runtime
 * 
 * Usage:
 * const { config, loading, error } = useMediaConfig();
 * 
 * if (loading) return <div>Loading...</div>;
 * if (error) return <div>Error loading media</div>;
 * 
 * return <img src={config.logos.company.main} alt="Logo" />;
 */
export function useMediaConfig() {
  const context = useContext(MediaConfigContext);
  if (!context) {
    throw new Error('useMediaConfig must be used within MediaConfigProvider');
  }
  return context;
}