import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export function BrandLoader() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.background.dark }}>
      <div className="relative flex flex-col items-center gap-6">
        {/* Halo Ring */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Spinning halo */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{ borderTopColor: theme.cta.primary }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full blur-xl" style={{ backgroundColor: `${theme.cta.primary}1A` }} />
        </div>

        {/* Brand Name */}
        <h1 className="text-[32px] sm:text-[40px] font-bold text-white tracking-tight">
          Anand PAG
        </h1>
      </div>
    </div>
  );
}