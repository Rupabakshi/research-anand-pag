import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Briefcase, GraduationCap, ArrowRight, GripVertical } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface Job {
  id: string;
  title: string;
  jobCode: string;
  description: string;
  requirements: string;
  location: string;
}

interface JobDrawerProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export function JobDrawer({ job, isOpen, onClose }: JobDrawerProps) {
  const [drawerWidth, setDrawerWidth] = useState(700);
  const [isResizing, setIsResizing] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Handle resize
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const newWidth = window.innerWidth - e.clientX;
      // Min width: 400px, Max width: 90% of viewport or 1200px
      const minWidth = 400;
      const maxWidth = Math.min(window.innerWidth * 0.9, 1200);
      
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setDrawerWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'ew-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing]);

  if (!job) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{ width: window.innerWidth >= 1024 ? `${drawerWidth}px` : '100%' }}
            className="fixed top-0 right-0 bottom-0 bg-white shadow-2xl z-[201] flex"
          >
            {/* Resize Handle - Desktop Only */}
            <div
              onMouseDown={handleMouseDown}
              className="hidden lg:flex flex-shrink-0 w-1 bg-gray-200 hover:bg-blue-500 transition-colors cursor-ew-resize relative group"
            >
              {/* Grip Icon */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-3 bg-gray-200 group-hover:bg-blue-500 rounded-full p-1 transition-colors">
                <GripVertical className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </div>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
              {/* Header */}
              <div className="flex-shrink-0 border-b border-gray-200 bg-white px-6 sm:px-8 py-5 sm:py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide bg-blue-100 text-blue-700">
                        {job.jobCode}
                      </span>
                    </div>
                    <h2 className="text-[24px] sm:text-[28px] font-[700] text-gray-900 leading-[1.2] tracking-[-0.02em]">
                      {job.title}
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900"
                    aria-label="Close job details"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div 
                className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 sm:py-8 scrollbar-hide"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                } as React.CSSProperties}
                onWheel={(e) => {
                  // Prevent scroll propagation to page behind
                  e.stopPropagation();
                }}
              >
                <style>
                  {`
                    .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                    }
                  `}
                </style>
                <div className="space-y-8">
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-[600] text-gray-900 mb-1">Location</h3>
                      <p className="text-[15px] text-gray-600 leading-[1.6]">{job.location}</p>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-[18px] font-[700] text-gray-900">Job Description</h3>
                    </div>
                    <div className="pl-[52px]">
                      <p className="text-[15px] text-gray-600 leading-[1.7] whitespace-pre-line">
                        {job.description}
                      </p>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-[18px] font-[700] text-gray-900">Minimum Requirements</h3>
                    </div>
                    <div className="pl-[52px]">
                      <p className="text-[15px] text-gray-600 leading-[1.7] whitespace-pre-line">
                        {job.requirements}
                      </p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <p className="text-[14px] text-gray-700 leading-[1.65]">
                      <strong className="font-[600] text-gray-900">Note:</strong> All positions may require travel to various client sites across the United States.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer - Sticky Apply Button */}
              <div className="flex-shrink-0 border-t border-gray-200 bg-white px-6 sm:px-8 py-5 sm:py-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="mailto:hr@anand-pag.com"
                    className="group relative flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50 text-center"
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      Apply for this Position
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                  <button
                    onClick={onClose}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-gray-700 text-[14px] sm:text-[15px] font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all"
                  >
                    Close
                  </button>
                </div>
                <p className="text-[13px] text-gray-500 text-center mt-4">
                  Email your resume to{' '}
                  <a href="mailto:hr@anand-pag.com" className="text-blue-600 hover:text-blue-700 font-medium">
                    hr@anand-pag.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}