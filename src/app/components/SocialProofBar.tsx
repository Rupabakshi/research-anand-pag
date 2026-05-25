import { motion } from 'motion/react';
import { useMediaConfig } from '../../config/media';

export function SocialProofBar() {
  const { config } = useMediaConfig();

  return (
    <section className="relative bg-white border-t border-[#030213]/5 overflow-hidden">
      <div className="py-12 sm:py-16 lg:py-20">
        
        {/* Label */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="text-[10px] sm:text-[11px] font-[500] uppercase tracking-[2px] text-slate-400">
            Trusted by
          </div>
        </div>

        {/* Scrolling Logo Strip */}
        <div className="relative">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <motion.div
            className="flex gap-8 sm:gap-12 lg:gap-16 items-center"
            animate={{
              x: [0, -1 * (duplicatedClients.length / 2) * 200]
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {duplicatedClients.map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 text-slate-700"
                style={{ minWidth: '140px' }}
              >
                <div className="flex items-center justify-center h-6 sm:h-7 lg:h-8">
                  {client.logo()}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}