import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function PrimaryButton({ children, className = '', ...props }: PrimaryButtonProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`group relative px-6 sm:px-8 py-3 sm:py-4 text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02] ${className}`}
      style={{
        backgroundColor: isHovered ? theme.cta.primaryHover : theme.cta.primary,
        color: 'white',
        boxShadow: isHovered
          ? `0 10px 15px -3px ${theme.cta.primary}80, 0 4px 6px -4px ${theme.cta.primary}80`
          : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Premium Inner Highlight (Top Edge) */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/20 z-20" />
      
      {/* Light Sweep Effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[sweep_1.5s_ease-in-out_infinite] pointer-events-none z-10`} 
        style={{ transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)', transition: isHovered ? 'transform 0.7s ease-in-out' : 'none' }}
      />

      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
