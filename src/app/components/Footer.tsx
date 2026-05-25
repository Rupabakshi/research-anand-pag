import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { PrefetchLink } from './PrefetchLink';
import { useTheme } from '../contexts/ThemeContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const linkClass = theme.isLight
    ? 'text-gray-600 hover:text-gray-900 transition-colors'
    : 'text-slate-300 hover:text-white transition-colors';

  const iconBtnClass = theme.isLight
    ? 'w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all text-gray-600'
    : 'w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all';

  return (
    <footer
      style={{
        backgroundColor: theme.background.dark,
        borderTop: `1px solid ${theme.border.glass}`,
        color: theme.isLight ? 'rgb(75, 85, 99)' : 'rgb(203, 213, 225)',
      }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1400px] mx-auto py-8">

          {/* Navigation Links Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-6 text-[14px] sm:text-[15px]">
            <PrefetchLink to="/" className={linkClass}>Home</PrefetchLink>
            <span style={{ color: theme.isLight ? 'rgb(209,213,219)' : 'rgb(71,85,105)' }}>|</span>
            <PrefetchLink to="/solutions/btp-portal" className={linkClass}>Solutions</PrefetchLink>
            <span style={{ color: theme.isLight ? 'rgb(209,213,219)' : 'rgb(71,85,105)' }}>|</span>
            <PrefetchLink to="/company/about" className={linkClass}>About</PrefetchLink>
            <span style={{ color: theme.isLight ? 'rgb(209,213,219)' : 'rgb(71,85,105)' }}>|</span>
            <PrefetchLink to="/company/careers" className={linkClass}>Careers</PrefetchLink>
            <span style={{ color: theme.isLight ? 'rgb(209,213,219)' : 'rgb(71,85,105)' }}>|</span>
            <PrefetchLink to="/company/contact" className={linkClass}>Contact</PrefetchLink>
            <span style={{ color: theme.isLight ? 'rgb(209,213,219)' : 'rgb(71,85,105)' }}>|</span>
            <PrefetchLink to="/legal/privacy" className={linkClass}>Privacy</PrefetchLink>
            <span style={{ color: theme.isLight ? 'rgb(209,213,219)' : 'rgb(71,85,105)' }}>|</span>
            <PrefetchLink to="/legal/terms" className={linkClass}>Terms</PrefetchLink>
          </div>

          {/* Copyright & Social Icons Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] sm:text-[14px]">
            <p>© {currentYear} Anand PAG Inc. · Coppell, Texas · +1 (972) 499-8126</p>

            <div className="flex items-center gap-3">
              <a href="#" className={iconBtnClass} aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className={iconBtnClass} aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className={iconBtnClass} aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className={iconBtnClass.replace('hover:bg-blue-600 hover:border-blue-600', 'hover:bg-red-600 hover:border-red-600')} aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
