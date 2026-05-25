import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeName = 'light' | 'slate' | 'navy';

export interface ThemeColors {
  name: ThemeName;
  displayName: string;
  isLight: boolean;
  background: {
    hero: string;
    dark: string;
    light: string;
  };
  cta: {
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    onLight: string;
    onLightSecondary: string;
    onLightMuted: string;
  };
  accent: {
    ambient1: string;
    ambient2: string;
    ambient3: string;
  };
  border: {
    glass: string;
    glassHover: string;
  };
}

const themes: Record<ThemeName, ThemeColors> = {
  light: {
    name: 'light',
    displayName: 'Light',
    isLight: true,
    background: {
      hero: 'rgb(255, 255, 255)',   // Pure white for that high-end SaaS feel
      dark: 'rgb(249, 250, 251)',   // Very subtle gray (gray-50) for alternating sections
      light: 'rgb(255, 255, 255)',
    },
    cta: {
      primary: 'rgb(37, 99, 235)',          // blue-600
      primaryHover: 'rgb(29, 78, 216)',     // blue-700
      secondary: 'rgba(37, 99, 235, 0.08)', // subtle blue-600 tint
      secondaryHover: 'rgba(37, 99, 235, 0.15)',
    },
    text: {
      primary: 'rgb(10, 15, 25)',           // Deep blue-black for high contrast
      secondary: 'rgb(55, 65, 81)',         // gray-700
      muted: 'rgb(75, 85, 99)',             // gray-600
      onLight: 'rgb(10, 15, 25)',
      onLightSecondary: 'rgb(55, 65, 81)',
      onLightMuted: 'rgb(75, 85, 99)',
    },
    accent: {
      ambient1: 'rgba(37, 99, 235, 0.05)',
      ambient2: 'rgba(37, 99, 235, 0.03)',
      ambient3: 'rgba(37, 99, 235, 0.04)',
    },
    border: {
      glass: 'rgba(0, 0, 0, 0.1)',
      glassHover: 'rgba(0, 0, 0, 0.2)',
    },
  },
  slate: {
    name: 'slate',
    displayName: 'Slate',
    isLight: false,
    background: {
      hero: 'rgb(15, 23, 42)',
      dark: 'rgb(15, 23, 42)',
      light: 'rgb(255, 255, 255)',
    },
    cta: {
      primary: 'rgb(37, 99, 235)',
      primaryHover: 'rgb(29, 78, 216)',
      secondary: 'rgba(37, 99, 235, 0.5)',
      secondaryHover: 'rgb(59, 130, 246)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(203, 213, 225)',
      muted: 'rgb(148, 163, 184)',
      onLight: 'rgb(17, 24, 39)',
      onLightSecondary: 'rgb(75, 85, 99)',
      onLightMuted: 'rgb(107, 114, 128)',
    },
    accent: {
      ambient1: 'rgba(59, 130, 246, 0.1)',
      ambient2: 'rgba(168, 85, 247, 0.05)',
      ambient3: 'rgba(6, 182, 212, 0.1)',
    },
    border: {
      glass: 'rgba(255, 255, 255, 0.1)',
      glassHover: 'rgba(255, 255, 255, 0.2)',
    },
  },
  navy: {
    name: 'navy',
    displayName: 'Navy',
    isLight: false,
    background: {
      hero: 'rgb(0, 61, 92)',
      dark: 'rgb(0, 61, 92)',
      light: 'rgb(255, 255, 255)',
    },
    cta: {
      primary: 'rgb(6, 182, 212)',
      primaryHover: 'rgb(8, 145, 178)',
      secondary: 'rgba(6, 182, 212, 0.5)',
      secondaryHover: 'rgb(34, 211, 238)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(203, 213, 225)',
      muted: 'rgb(148, 163, 184)',
      onLight: 'rgb(17, 24, 39)',
      onLightSecondary: 'rgb(75, 85, 99)',
      onLightMuted: 'rgb(107, 114, 128)',
    },
    accent: {
      ambient1: 'rgba(6, 182, 212, 0.15)',
      ambient2: 'rgba(14, 116, 144, 0.1)',
      ambient3: 'rgba(34, 211, 238, 0.12)',
    },
    border: {
      glass: 'rgba(255, 255, 255, 0.1)',
      glassHover: 'rgba(255, 255, 255, 0.2)',
    },
  },
};

interface ThemeContextType {
  theme: ThemeColors;
  themeName: ThemeName;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'anandpag-theme';
const THEME_ORDER: ThemeName[] = ['light', 'slate', 'navy'];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'light' || stored === 'slate' || stored === 'navy') return stored;
    }
    return 'light';
  });

  const theme = themes[themeName];

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themeName);
    document.documentElement.setAttribute('data-theme', themeName);
    
    // Manage .dark class for Tailwind
    if (themeName === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [themeName]);

  // Set initial data-theme on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeName);
    if (themeName !== 'light') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setThemeName(prev => {
      const idx = THEME_ORDER.indexOf(prev);
      return THEME_ORDER[(idx + 1) % THEME_ORDER.length];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme: setThemeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
