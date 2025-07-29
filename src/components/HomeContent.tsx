'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeContent() {
  const t = useTranslations();

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-background.png"
          alt="Mr. Baron Billiards Bar Background"
          fill
          className="object-cover"
          priority
        />
        {/* Multiple Gradient Overlays for Professional Look */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/80 via-green-900/70 to-green-800/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10"></div>
      </div>

      {/* Floating Elements for Depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-amber-600/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <section className="relative z-10 text-center py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative z-10">
            {/* Enhanced Header with Backdrop */}
            <div className="relative mb-8 sm:mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-amber-500/15 via-amber-600/10 to-amber-500/15 border border-amber-500/30 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-amber-100 mb-6 sm:mb-8 leading-tight tracking-tight drop-shadow-2xl">
                  Mr. Baron Billiards Bar
                </h1>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto mb-6 sm:mb-8 rounded-full shadow-lg"></div>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-200 mb-8 sm:mb-12 font-light leading-relaxed">
                  {t('homepage.subtitle')}
                </p>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="relative mb-12 sm:mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-green-800/20 via-green-900/15 to-green-800/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-green-800/20 to-green-900/20 border border-green-700/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <p className="text-base sm:text-lg md:text-xl text-amber-100/90 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-light">
                  {t('homepage.description')}
                </p>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/menu"
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-green-900 font-bold text-lg sm:text-xl rounded-2xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">{t('homepage.viewMenu')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-6 mt-12 sm:mt-16">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <span className="text-amber-400 text-xl sm:text-2xl">🎱</span>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <span className="text-amber-400 text-xl sm:text-2xl">🍸</span>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <span className="text-amber-400 text-xl sm:text-2xl">🏆</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 