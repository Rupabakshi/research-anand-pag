import { ReactNode, HTMLAttributes } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export function GlassCard({
  children,
  className = '',
  padding = 'md',
  hover = true,
  ...props
}: GlassCardProps) {
  const { theme } = useTheme();

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  if (theme.isLight) {
    const hoverClasses = hover ? 'hover:shadow-md hover:border-gray-300 transition-all' : '';
    return (
      <div
        className={`bg-white border border-gray-200 shadow-sm rounded-lg ${paddingClasses[padding]} ${hoverClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }

  const hoverClasses = hover ? 'hover:bg-white/[0.05] hover:border-white/20 transition-all' : '';
  return (
    <div
      className={`bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg ${paddingClasses[padding]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
