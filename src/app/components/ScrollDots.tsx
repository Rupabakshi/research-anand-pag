interface ScrollDotsProps {
  /** Total number of dots to display */
  totalDots: number;
  /** Index of the currently active dot (0-based) */
  activeIndex: number;
  /** Callback when a dot is clicked, receives the dot index */
  onDotClick: (index: number) => void;
  /** Theme variant for different background colors */
  variant?: 'light' | 'dark';
  /** Optional className for the container */
  className?: string;
}

export function ScrollDots({ 
  totalDots, 
  activeIndex, 
  onDotClick, 
  variant = 'light',
  className = ''
}: ScrollDotsProps) {
  const dots = Array.from({ length: totalDots }, (_, i) => i);
  
  const inactiveColors = variant === 'dark' 
    ? 'bg-white/20 hover:bg-white/40' 
    : 'bg-slate-300 hover:bg-slate-400';

  return (
    <div className={`flex justify-center gap-2 ${className}`}>
      {dots.map((idx) => (
        <button
          key={idx}
          onClick={() => onDotClick(idx)}
          className={`transition-all duration-300 rounded-full ${
            activeIndex === idx 
              ? 'w-8 h-2 bg-blue-600' 
              : `w-2 h-2 ${inactiveColors}`
          }`}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  );
}
