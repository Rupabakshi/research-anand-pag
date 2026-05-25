import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Building2, Zap, Settings, Users, ChevronRight, Sparkles, TrendingUp, Factory, Heart, ShoppingBag, Landmark, FileText, Lightbulb, Calendar, Info, Briefcase, Award, Mail, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { PrefetchLink } from './PrefetchLink';
import { prefetchRoute } from '../utils/prefetch';
import { useMediaConfig } from '../../config/media';
import { PrimaryButton } from './ui/PrimaryButton';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { config, loading } = useMediaConfig();
  const { theme } = useTheme();

  // Check if we're on a solutions page
  const isOnSolutionsPage = location.pathname.startsWith('/solutions');

  // Check which specific solution page we're on
  const isOnProcessFactoryPage = location.pathname === '/solutions/process-factory';
  const isOnBTPPortalPage = location.pathname === '/solutions/btp-portal';

  // Check if we're on a company page
  const isOnCompanyPage = location.pathname.startsWith('/company');

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null); // Also close desktop dropdowns on route change
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If still loading or no config available, don't render navigation content yet
  // The header structure renders, but without dropdown content
  const products = config ? [
    {
      icon: Globe,
      title: 'SAP BTP Vendor Portal',
      desc: 'Secure cloud platform for centralized vendor service operations',
      image: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?auto=format&fit=crop&q=80&w=800',
      href: '/solutions/btp-portal',
      features: [
        'S/4HANA Integration',
        'Order Lifecycle',
        'Document Automation'
      ]
    },
    {
      icon: Settings,
      title: 'Process Factory®',
      desc: 'End-to-end workflow automation and process optimization',
      image: config.megaMenuImages.solutions.processFactory,
      href: '/solutions/process-factory',
      features: [
        'Workflow Automation',
        'Process Optimization',
        'Integration Tools'
      ]
    }
  ] : [];

  const industries = config ? [
    {
      icon: Factory,
      title: 'Manufacturing',
      desc: 'Digital transformation for Industry 4.0 and smart manufacturing',
      image: config.megaMenuImages.industries.manufacturing,
      href: '/industries/manufacturing',
      features: [
        'Supply Chain Optimization',
        'Production Planning',
        'Quality Management'
      ]
    },
    {
      icon: Heart,
      title: 'Healthcare',
      desc: 'Digital health solutions for patient care and operations',
      image: config.megaMenuImages.industries.healthcare,
      href: '/industries/healthcare',
      features: [
        'Patient Management',
        'Compliance & Security',
        'Clinical Analytics'
      ]
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      desc: 'Omnichannel commerce and customer experience solutions',
      image: config.megaMenuImages.industries.retail,
      href: '/industries/retail',
      features: [
        'Inventory Management',
        'Customer Analytics',
        'E-commerce Integration'
      ]
    },
    {
      icon: Landmark,
      title: 'Financial Services',
      desc: 'Risk management and regulatory compliance for finance',
      image: config.megaMenuImages.industries.financial,
      href: '/industries/financial-services',
      features: [
        'Risk & Compliance',
        'Financial Planning',
        'Digital Banking'
      ]
    }
  ] : [];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      theme.isLight
        ? scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
        : scrolled
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
    }`}>
      {/* Main Navigation Container */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-[64px]' : 'h-[80px]'
        }`}>
          
          {/* Logo Section */}
          <div className="flex items-center gap-12">
            <PrefetchLink to="/" className="flex items-center transition-opacity hover:opacity-80">
              <img 
                src={config.logos.company.main} 
                alt="Anand PAG Inc" 
                className={`transition-all duration-500 ${ scrolled ? 'h-7' : 'h-10'
                }`} 
              />
            </PrefetchLink>

            {/* Primary Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              
              {/* Solutions - Mega Menu (renamed from Products) */}
              <div 
                className="relative group"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`relative px-3 py-2 text-[13px] md:text-[14px] font-medium transition-colors ${
                    theme.isLight
                      ? isOnSolutionsPage ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'
                      : isOnSolutionsPage ? 'text-white' : 'text-white/90 hover:text-white'
                  }`}
                  onMouseEnter={() => setActiveDropdown('solutions')}
                >
                  Solutions
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 transform transition-transform origin-left ${
                    isOnSolutionsPage ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
                    <motion.div 
                      className="absolute top-full left-0 pt-2 w-[750px] z-[100]"
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setActiveDropdown('solutions')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="relative bg-white backdrop-blur-xl rounded-2xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] border border-slate-200/80 overflow-hidden">
                        
                        <div className="relative grid grid-cols-2 gap-0">
                          {products.map((product, idx) => {
                            const Icon = product.icon;
                            const isActive = (product.href === '/solutions/process-factory' && isOnProcessFactoryPage) ||
                                            (product.href === '/solutions/btp-portal' && isOnBTPPortalPage);
                            return (
                              <PrefetchLink
                                key={idx}
                                to={product.href}
                                className={`group/item relative flex flex-col transition-all duration-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 border-r border-slate-200/60 last:border-r-0 ${
                                  isActive ? 'bg-blue-50/50' : ''
                                }`}
                                aria-label={`${product.title} - ${product.desc}`}
                              >
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: idx * 0.05,
                                    ease: [0.16, 1, 0.3, 1]
                                  }}
                                  className="flex flex-col h-full"
                                >
                                  {/* Active indicator */}
                                  {isActive && (
                                    <div className="absolute top-4 right-4 z-20">
                                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-600 rounded-full">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                        <span className="text-[10px] font-semibold text-white uppercase tracking-wide">Current</span>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {/* Hero Image Overlay */}
                                  <div className="relative h-40 overflow-hidden">
                                    <div className={`absolute inset-0 transition-all duration-300 z-10 ${
                                      isActive 
                                        ? 'bg-blue-600/10' 
                                        : 'bg-slate-600/5 group-hover/item:bg-blue-600/15'
                                    }`} />
                                    <img 
                                      src={product.image} 
                                      alt={product.title}
                                      className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                                    />
                                  </div>

                                  {/* Content */}
                                  <div className="p-6 flex-1 flex flex-col">
                                    <h3 className={`font-semibold text-[15px] transition-colors leading-tight mb-2 ${
                                      isActive 
                                        ? 'text-blue-600' 
                                        : 'text-slate-900 group-hover/item:text-blue-600'
                                    }`}>
                                      {product.title}
                                    </h3>
                                    <p className="text-[13px] text-slate-600 leading-relaxed mb-4">
                                      {product.desc}
                                    </p>
                                    
                                    {/* Feature List */}
                                    <ul className="space-y-2 mt-auto">
                                      {product.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2 text-[13px] text-slate-700">
                                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </motion.div>
                              </PrefetchLink>
                            );
                          })}
                        </div>

                        {/* Footer with CTA */}
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="relative bg-white border-t border-slate-200/60 px-6 py-5 text-center"
                        >
                          <p className="text-sm text-slate-600 mb-3">
                            Not sure which solution fits your needs?
                          </p>
                          <PrefetchLink to="/company/contact">
                            <PrimaryButton className="inline-flex items-center gap-2 text-sm">
                              Get a Free Consultation
                              <ArrowRight className="w-4 h-4" />
                            </PrimaryButton>
                          </PrefetchLink>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries - Mega Menu */}
              <div 
                className="relative group"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`relative px-3 py-2 text-[13px] md:text-[14px] font-medium transition-colors ${
                    theme.isLight ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                  }`}
                  onMouseEnter={() => setActiveDropdown('industries')}
                >
                  Industries
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 transform scale-x-0 transition-transform group-hover:scale-x-100 origin-left" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div 
                      className="absolute top-full left-0 pt-2 w-[900px] max-w-[calc(100vw-48px)] z-[100]"
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setActiveDropdown('industries')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="relative bg-white backdrop-blur-xl rounded-2xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] border border-slate-200/80 overflow-hidden">
                        
                        <div className="relative grid grid-cols-4 gap-0">
                          {industries.map((industry, idx) => {
                            const Icon = industry.icon;
                            return (
                              <PrefetchLink
                                key={idx}
                                to={industry.href}
                                className="group/item relative flex flex-col transition-all duration-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 border-r border-slate-200/60 last:border-r-0"
                              >
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: idx * 0.05,
                                    ease: [0.16, 1, 0.3, 1]
                                  }}
                                >
                                  {/* Hero Image Overlay */}
                                  <div className="relative h-32 overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-600/5 group-hover/item:bg-blue-600/15 transition-all duration-300 z-10" />
                                    <img 
                                      src={industry.image} 
                                      alt={industry.title}
                                      className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                                    />
                                  </div>

                                  {/* Content */}
                                  <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="font-semibold text-[14px] text-slate-900 group-hover/item:text-blue-600 transition-colors leading-tight mb-2">
                                      {industry.title}
                                    </h3>
                                    <p className="text-[12px] text-slate-600 leading-relaxed mb-3">
                                      {industry.desc}
                                    </p>
                                    
                                    {/* Feature List */}
                                    <ul className="space-y-1.5 mt-auto">
                                      {industry.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2 text-[12px] text-slate-700">
                                          <span className="w-1 h-1 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </motion.div>
                              </PrefetchLink>
                            );
                          })}
                        </div>

                        {/* Footer */}
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="relative bg-white border-t border-slate-200/60 px-6 py-4 text-center"
                        >
                          <a 
                            href="#all-industries" 
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            View all industries we serve
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources - Dropdown (merged Client Success + Insights) */}
              <div className="relative group">
                <button
                  className={`relative px-3 py-2 text-[13px] md:text-[14px] font-medium transition-colors ${
                    theme.isLight ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                  }`}
                  onMouseEnter={() => setActiveDropdown('resources')}
                >
                  Resources
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 transform scale-x-0 transition-transform group-hover:scale-x-100 origin-left" />
                </button>
                
                {activeDropdown === 'resources' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 z-[100]"
                    onMouseEnter={() => setActiveDropdown('resources')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200/80 py-2">
                      {[
                        { label: 'Case Studies', icon: FileText, href: '/resources/case-studies' },
                        { label: 'Blog', icon: Lightbulb, href: '/resources/blog' },
                        { label: 'Whitepapers', icon: FileText, href: '/resources/whitepapers' },
                        { label: 'Events', icon: Calendar, href: '/resources/events' }
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.href;
                        return (
                          <PrefetchLink
                            key={idx}
                            to={item.href} 
                            className={`group/link flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                              isActive 
                                ? 'bg-blue-50 text-blue-600' 
                                : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="flex-1">{item.label}</span>
                            <ChevronRight className={`w-4 h-4 transition-opacity ${
                              isActive ? 'opacity-100' : 'opacity-0 group-hover/link:opacity-100'
                            }`} />
                          </PrefetchLink>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Company - Dropdown */}
              <div className="relative group">
                <button
                  className={`relative px-3 py-2 text-[13px] md:text-[14px] font-medium transition-colors ${
                    theme.isLight
                      ? isOnCompanyPage ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'
                      : isOnCompanyPage ? 'text-white' : 'text-white/90 hover:text-white'
                  }`}
                  onMouseEnter={() => setActiveDropdown('company')}
                >
                  Company
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 transform transition-transform origin-left ${
                    isOnCompanyPage ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
                
                {activeDropdown === 'company' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 z-[100]"
                    onMouseEnter={() => setActiveDropdown('company')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200/80 py-2">
                      {[
                        { label: 'About Us', icon: Info, href: '/company/about' },
                        { label: 'Careers', icon: Briefcase, href: '/company/careers' },
                        { label: 'Contact', icon: Mail, href: '/company/contact' }
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.href;
                        return (
                          <PrefetchLink
                            key={idx}
                            to={item.href} 
                            className={`group/link flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                              isActive 
                                ? 'bg-blue-50 text-blue-600' 
                                : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="flex-1">{item.label}</span>
                            <ChevronRight className={`w-4 h-4 transition-opacity ${
                              isActive ? 'opacity-100' : 'opacity-0 group-hover/link:opacity-100'
                            }`} />
                          </PrefetchLink>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right Side - CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            {scrolled ? (
              <PrefetchLink
                to="/company/contact"
                className={`flex items-center gap-2 text-[15px] font-semibold transition-colors ${
                  theme.isLight ? 'text-blue-600 hover:text-blue-700' : 'text-blue-500 hover:text-blue-400'
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </PrefetchLink>
            ) : (
              <PrefetchLink to="/company/contact">
                <PrimaryButton>
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </PrimaryButton>
              </PrefetchLink>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              theme.isLight
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <nav className="space-y-1">
              
              <details className="group">
                <summary className="flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-lg cursor-pointer">
                  Solutions
                  <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-100 pl-4">
                  {products.map((product, idx) => {
                    const isActive = location.pathname === product.href;
                    return (
                      <PrefetchLink 
                        key={idx} 
                        to={product.href} 
                        className={`block px-3 py-2 text-sm rounded-lg transition-all ${
                          isActive 
                            ? 'bg-blue-50 text-blue-600 font-semibold border-l-2 border-blue-600 -ml-[2px]' 
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {product.title}
                        {isActive && <span className="ml-2 text-xs">•</span>}
                      </PrefetchLink>
                    );
                  })}
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-lg cursor-pointer">
                  Industries
                  <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-100 pl-4">
                  {industries.map((industry, idx) => {
                    const isActive = location.pathname === industry.href;
                    return (
                      <PrefetchLink 
                        key={idx} 
                        to={industry.href} 
                        className={`block px-3 py-2 text-sm rounded-lg transition-all ${
                          isActive 
                            ? 'bg-blue-50 text-blue-600 font-semibold border-l-2 border-blue-600 -ml-[2px]' 
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {industry.title}
                        {isActive && <span className="ml-2 text-xs">•</span>}
                      </PrefetchLink>
                    );
                  })}
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-lg cursor-pointer">
                  Resources
                  <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-100 pl-4">
                  {[
                    { label: 'Case Studies', href: '/resources/case-studies' },
                    { label: 'Blog', href: '/resources/blog' },
                    { label: 'Whitepapers', href: '/resources/whitepapers' },
                    { label: 'Events', href: '/resources/events' }
                  ].map((item, idx) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <PrefetchLink 
                        key={idx} 
                        to={item.href} 
                        className={`block px-3 py-2 text-sm rounded-lg transition-all ${
                          isActive 
                            ? 'bg-blue-50 text-blue-600 font-semibold border-l-2 border-blue-600 -ml-[2px]' 
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                        {isActive && <span className="ml-2 text-xs">•</span>}
                      </PrefetchLink>
                    );
                  })}
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-lg cursor-pointer">
                  Company
                  <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-100 pl-4">
                  {[
                    { label: 'About Us', href: '/company/about' },
                    { label: 'Careers', href: '/company/careers' },
                    { label: 'Contact', href: '/company/contact' }
                  ].map((item, idx) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <PrefetchLink 
                        key={idx} 
                        to={item.href} 
                        className={`block px-3 py-2 text-sm rounded-lg transition-all ${
                          isActive 
                            ? 'bg-blue-50 text-blue-600 font-semibold border-l-2 border-blue-600 -ml-[2px]' 
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                        {isActive && <span className="ml-2 text-xs">•</span>}
                      </PrefetchLink>
                    );
                  })}
                </div>
              </details>

              <div className="pt-6 mt-6 border-t border-slate-200 space-y-3">
                <PrefetchLink to="/company/contact" className="block w-full">
                  <Button className="w-full justify-center bg-gradient-to-r from-blue-600 to-blue-700 h-11 font-semibold shadow-lg">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </PrefetchLink>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}