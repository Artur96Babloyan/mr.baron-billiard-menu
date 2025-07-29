'use client';

import { useTranslations } from 'next-intl';

export default function MenuHeader() {
  const t = useTranslations();

  return (
    <section className="relative text-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/25 via-amber-600/20 to-amber-500/25 rounded-3xl blur-3xl"></div>

          {/* Main Header Container */}
          <div className="relative bg-gradient-to-br from-amber-500/20 via-amber-600/15 to-amber-500/20 border border-amber-500/40 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-sm">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

            {/* Title with Enhanced Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-amber-100 mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
                {t('menu.title')}
              </span>
            </h1>

            {/* Enhanced Divider */}
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto mb-6 sm:mb-8 rounded-full shadow-lg"></div>

            {/* Subtitle with Better Styling */}
            <p className="text-lg sm:text-xl lg:text-2xl text-amber-200/90 max-w-3xl mx-auto font-light leading-relaxed">
              Premium Drinks • Craft Cocktails • Delicious Snacks
            </p>

            {/* Decorative Icons */}
            <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-6 sm:mt-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/25 rounded-full flex items-center justify-center">
                <span className="text-amber-400 text-lg sm:text-xl">🍸</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/25 rounded-full flex items-center justify-center">
                <span className="text-amber-400 text-lg sm:text-xl">🍺</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/25 rounded-full flex items-center justify-center">
                <span className="text-amber-400 text-lg sm:text-xl">🍽️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 