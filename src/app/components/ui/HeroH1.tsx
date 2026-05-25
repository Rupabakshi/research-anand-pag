import { ReactNode } from 'react';

/**
 * HeroH1 Component
 * 
 * Centralized hero h1 component with guaranteed font sizing using CSS clamp().
 * Bypasses Tailwind arbitrary value issues by using inline styles.
 * 
 * Usage:
 * <HeroH1>Your headline text</HeroH1>
 * <HeroH1 variant="light">Light section headline</HeroH1>
 * <HeroH1 className="mb-8">Custom spacing</HeroH1>
 */

interface HeroH1Props {
  children: ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
}

export function HeroH1({ children, variant = 'dark', className = '' }: HeroH1Props) {
  // Premium, refined sizing - smaller and more sophisticated
  // Dark: Reduced from 36-88px to 40-64px
  // Light: Reduced from 40-56px to 38-50px
  
  const fontSize = variant === 'dark' 
    ? 'clamp(40px, 4vw, 64px)'  // Dark hero: 40px -> 64px (more refined)
    : 'clamp(44px, 5.5vw, 92px)';  // Premium Light Hero: Bigger and more impactful

  const baseClasses = variant === 'dark'
    ? 'font-[600] text-white leading-[1.1] tracking-[-0.02em]'
    : 'font-[500] text-gray-900 leading-[0.88] tracking-[-0.04em] uppercase';

  return (
    <h1 
      className={`${baseClasses} ${className}`}
      style={{ fontSize }}
    >
      {children}
    </h1>
  );
}