import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface EyebrowPillProps {
  children: ReactNode;
  icon?: LucideIcon;
  showDot?: boolean;
  className?: string;
}

export function EyebrowPill({ children, icon: Icon, showDot = true, className = '' }: EyebrowPillProps) {
  const { theme } = useTheme();

  if (theme.isLight) {
    return (
      <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 border border-blue-100 rounded-full ${className}`}>
        {showDot && !Icon && (
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        )}
        {Icon && <Icon className="w-4 h-4 text-blue-500" />}
        <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-blue-700">
          {children}
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full ${className}`}>
      {showDot && !Icon && (
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
      )}
      {Icon && <Icon className="w-4 h-4 text-blue-400" />}
      <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
        {children}
      </span>
    </div>
  );
}
