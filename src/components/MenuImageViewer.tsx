'use client';

import Image from 'next/image';
import MenuTitle from './MenuTitle';

export default function MenuImageViewer() {

  const menuImages = [
    '/menuImages/Mr. Baron Billiards Bar-1.png',
    '/menuImages/Mr. Baron Billiards Bar-2.png',
    '/menuImages/Mr. Baron Billiards Bar-3.png',
    '/menuImages/Mr. Baron Billiards Bar-4.png',
    '/menuImages/Mr. Baron Billiards Bar-5.png',
    '/menuImages/Mr. Baron Billiards Bar-6.png'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-11 relative z-10">
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
              <div className="relative w-full mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]">
                <Image
                  src={image}
                  alt={`Mr. Baron Menu Page ${index + 1}`}
                  width={800}
                  height={1000}
                  className="w-full h-full object-contain"
                  priority={index === 0}
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 