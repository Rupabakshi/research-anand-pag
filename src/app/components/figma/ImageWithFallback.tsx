import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleError = () => {
    setDidError(true)
    setIsLoaded(true)
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const { src, alt, style, className = '', loading = 'lazy', ...rest } = props

  if (didError) {
    return (
      <div
        className={`bg-slate-100 flex items-center justify-center ${className}`}
        style={style}
      >
        <img src={ERROR_IMG_SRC} alt="Error loading image" className="w-16 h-16" {...rest} data-original-url={src} />
      </div>
    );
  }

  return (
    <>
      {/* Skeleton loader - shows while loading */}
      {!isLoaded && (
        <div 
          className={`relative overflow-hidden bg-slate-200 ${className}`}
          style={style}
          aria-hidden="true"
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200" />
          
          {/* Icon placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-slate-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
        </div>
      )}
      
      {/* Main image - replaces skeleton when loaded */}
      <img 
        src={src} 
        alt={alt} 
        className={`
          ${className}
          transition-opacity duration-500
          ${isLoaded ? 'opacity-100' : 'opacity-0 absolute invisible'}
        `}
        style={style}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
        {...rest} 
      />
    </>
  )
}