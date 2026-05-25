import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function SecondaryButton({ children, className = '', ...props }: SecondaryButtonProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  if (theme.isLight) {
    return (
      <button
        className={`px-6 sm:px-8 py-3 sm:py-4 text-[14px] sm:text-[15px] font-semibold rounded-xl transition-all ${className}`}
        style={{
          color: isHovered ? theme.cta.primaryHover : theme.cta.primary,
          backgroundColor: isHovered ? 'rgba(37, 99, 235, 0.06)' : 'transparent',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: isHovered ? theme.cta.primary : 'rgba(37, 99, 235, 0.35)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`px-6 sm:px-8 py-3 sm:py-4 text-[14px] sm:text-[15px] font-semibold rounded-xl transition-all ${className}`}
      style={{
        color: 'white',
        backgroundColor: isHovered ? `${theme.cta.primary}1A` : 'transparent',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: isHovered ? theme.cta.secondaryHover : theme.cta.secondary,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}
