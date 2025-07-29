'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PDFMenuViewer() {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Timeout fallback to hide loading if onLoad doesn't fire
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log('PDF loading timeout - hiding loader');
        setIsLoading(false);
      }
    }, 3000); // 3 second timeout

    return () => clearTimeout(timer);
  }, [isLoading]);

  // Force hide loading after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second fallback

    return () => clearTimeout(timer);
  }, []);

  // Reset loading state when component re-renders (e.g., language change)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log('Component re-render - resetting loading state');
        setIsLoading(false);
        setHasError(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-11 relative z-10">
      {/* Classic Header Section */}
      <div className="text-center mb-16">
        {/* Decorative Line Above */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-16 h-px bg-white/40"></div>
          <div className="w-3 h-3 bg-white rounded-full mx-4"></div>
          <div className="w-16 h-px bg-white/40"></div>
        </div>

        {/* Main Title */}
        <div className="relative">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-wider drop-shadow-2xl">
            {t('menu.brandTitle')}
          </h1>

          {/* Subtle Text Shadow for Depth */}
          <div className="absolute inset-0 text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white/20 tracking-wider -z-10">
            {t('menu.brandTitle')}
          </div>
        </div>

        {/* Elegant Subtitle */}
        <div className="relative">
          <p className="text-xl sm:text-2xl text-white/90 font-light tracking-wide mb-6 drop-shadow-lg">
            {t('menu.brandSubtitle')}
          </p>

          {/* Decorative Underline */}
          <div className="flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          </div>
        </div>

        {/* Classic Decorative Elements */}
        <div className="flex justify-center items-center mt-8 space-x-8">
          <div className="w-8 h-px bg-white/30"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-8 h-px bg-white/30"></div>
        </div>
      </div>

      {/* Professional PDF Viewer Section */}
      <div className="relative">
        {/* Clean PDF Container */}
        <div className="relative overflow-hidden">


          {/* PDF Display */}
          <div className="relative w-full bg-transparent">
            {/* Mobile-friendly PDF container */}
            <div className="w-full h-screen sm:h-auto sm:aspect-[8.5/11]">
              <iframe
                src={`/Mr. Baron Billiards Bar.pdf#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=100`}
                className="w-full h-full border-0"
                title="Mr. Baron Billiards Bar Menu"
                onLoad={() => {
                  console.log('PDF loaded successfully');
                  // Add a small delay to ensure PDF is fully rendered
                  setTimeout(() => {
                    setIsLoading(false);
                    setHasError(false);
                  }, 1000); // Increased delay for mobile
                }}
                onError={(e) => {
                  console.error('PDF loading error:', e);
                  setHasError(true);
                  setIsLoading(false);
                }}
                onLoadStart={() => {
                  console.log('PDF loading started');
                  setIsLoading(true);
                }}
                style={{
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  minHeight: '100vh',
                  maxHeight: '100vh'
                }}
              />
            </div>


            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-transparent text-white font-serif text-lg z-10">
                <div className="flex flex-col items-center space-y-8">
                  {/* Modern Logo Loading Animation */}
                  <div className="relative">
                    {/* Logo Container */}
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      {/* Animated Background Ring */}
                      <div className="absolute inset-0 w-full h-full border-4 border-white/30 rounded-full shadow-lg"></div>
                      <div
                        className="absolute inset-0 w-full h-full border-4 border-transparent border-t-white rounded-full shadow-lg"
                        style={{
                          animation: 'spin 1.5s linear infinite'
                        }}
                      ></div>

                      {/* Logo */}
                      <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-white/90 to-white/70 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                        <Image
                          src="/logo.png"
                          alt="Mr. Baron Logo"
                          width={64}
                          height={64}
                          className="object-contain rounded-full"
                        />
                      </div>

                      {/* Pulsing Glow Effect */}
                      <div
                        className="absolute inset-0 w-20 h-20 bg-white rounded-full opacity-30 shadow-xl"
                        style={{
                          animation: 'pulse 2s ease-in-out infinite'
                        }}
                      ></div>
                    </div>

                    {/* Loading Dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                      <div
                        className="w-3 h-3 bg-white rounded-full shadow-lg"
                        style={{
                          animation: 'bounce 1.4s ease-in-out infinite both'
                        }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-white rounded-full shadow-lg"
                        style={{
                          animation: 'bounce 1.4s ease-in-out infinite both 0.2s'
                        }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-white rounded-full shadow-lg"
                        style={{
                          animation: 'bounce 1.4s ease-in-out infinite both 0.4s'
                        }}
                      ></div>
                    </div>
                  </div>

                  <span className="text-lg font-serif text-white drop-shadow-lg">Loading PDF Menu...</span>
                </div>

                <style jsx>{`
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                  
                  @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.2; }
                    50% { transform: scale(1.1); opacity: 0.4; }
                  }
                  
                  @keyframes bounce {
                    0%, 80%, 100% { transform: scale(0); }
                    40% { transform: scale(1); }
                  }
                `}</style>
              </div>
            )}
            {/* Error overlay */}
            {hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-red-600 font-serif text-lg z-10">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <span className="text-xl">⚠️</span>
                  <span>Failed to load PDF menu</span>
                  <button
                    onClick={() => {
                      setIsLoading(true);
                      setHasError(false);
                      // Force iframe reload
                      const iframe = document.querySelector('iframe');
                      if (iframe) {
                        iframe.src = iframe.src;
                      }
                    }}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
} 