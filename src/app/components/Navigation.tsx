import { useMediaConfig } from '../../config/media';
import { PrefetchLink } from './PrefetchLink';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const { config } = useMediaConfig();
  const { theme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg" style={{ backgroundColor: `${theme.background.dark}CC`, borderBottom: `1px solid ${theme.border.glass}` }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={config.logos.company.main} alt="Anand PAG Inc" className="h-7" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-[14px] text-slate-300 hover:text-white transition-colors px-4 py-2">
              Log in
            </button>
            <PrefetchLink to="/company/contact">
              <button className="px-5 py-2 bg-blue-600 text-white text-[14px] font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Contact sales
              </button>
            </PrefetchLink>
          </div>
        </div>
      </div>
    </nav>
  );
}