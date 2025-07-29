'use client';

import { useState } from 'react';
import Image from 'next/image';
import MenuTitle from './MenuTitle';

export default function MenuImageViewer() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const menuImages = [
    '/menuImages/Mr. Baron Billiards Bar-1.png',
    '/menuImages/Mr. Baron Billiards Bar-2.png',
    '/menuImages/Mr. Baron Billiards Bar-3.png',
    '/menuImages/Mr. Baron Billiards Bar-4.png',
    '/menuImages/Mr. Baron Billiards Bar-5.png',
    '/menuImages/Mr. Baron Billiards Bar-6.png'
  ];

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pb-16 pt-11 relative z-10">
      {/* Menu Title */}
      <MenuTitle />

      {/* Scroll Down Icon Hint */}
      <div className="text-center mb-8">
        <div className="inline-flex flex-col items-center space-y-1 opacity-60 hover:opacity-80 transition-opacity duration-300">
          {/* Mouse/Scroll Icon */}
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-center justify-center relative">
            {/* Scroll wheel */}
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
            {/* Scroll indicator dots */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1">
              <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          {/* Down arrow */}
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-2 h-2 border-r-2 border-b-2 border-white/40 transform rotate-45 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scrollable Menu Container */}
      <div className="h-[85vh] overflow-y-auto scroll-smooth">
        <div className="space-y-[3px]">
          {menuImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center py-[3px]">
              <div className="w-full mx-1 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-18 relative">
                {/* Loading Placeholder */}
                {!loadedImages.has(index) && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-gray-300/20 backdrop-blur-sm rounded-lg animate-pulse">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 border-2 border-white/50 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        <div className="text-white/60 text-sm font-medium">Loading Menu...</div>
                      </div>
                    </div>
                  </div>
                )}

                <Image
                  src={image}
                  alt={`Mr. Baron Menu Page ${index + 1}`}
                  width={800}
                  height={1000}
                  className={`w-full h-auto object-contain transition-opacity duration-500 ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                    }`}
                  priority={index === 0}
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 