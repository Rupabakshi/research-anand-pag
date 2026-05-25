import { Link, LinkProps } from 'react-router';
import { prefetchRoute } from '../utils/prefetch';

interface PrefetchLinkProps extends LinkProps {
  children: React.ReactNode;
}

export function PrefetchLink({ to, children, ...props }: PrefetchLinkProps) {
  const handlePrefetch = () => {
    if (typeof to === 'string') {
      prefetchRoute(to);
    }
  };
  
  return (
    <Link 
      to={to} 
      onMouseEnter={handlePrefetch}    // Desktop: prefetch on hover
      onTouchStart={handlePrefetch}     // Mobile: prefetch on touch start
      {...props}
    >
      {children}
    </Link>
  );
}