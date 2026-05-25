import { Sun, Moon, Anchor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { themeName, toggleTheme, theme } = useTheme();

  const config = {
    light: { icon: Sun, label: 'Light' },
    slate: { icon: Moon, label: 'Slate' },
    navy: { icon: Anchor, label: 'Navy' },
  };

  const { icon: Icon, label } = config[themeName];

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium rounded-lg border transition-all"
      style={{
        backgroundColor: theme.isLight
          ? 'rgba(0, 0, 0, 0.04)'
          : 'rgba(255, 255, 255, 0.08)',
        borderColor: theme.isLight
          ? 'rgba(0, 0, 0, 0.12)'
          : 'rgba(255, 255, 255, 0.15)',
        color: theme.isLight ? 'rgb(55, 65, 81)' : 'rgb(203, 213, 225)',
      }}
      aria-label={`Switch theme (current: ${label})`}
    >
      <Icon className="w-3.5 h-3.5" />
      <span>{label}</span>
    </button>
  );
}
