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
        {/* Classic Black Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30"></div>
      </div>

      {/* Main Content */}
      <section className="relative z-10 text-center py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative z-10">
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
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-6 tracking-wider drop-shadow-2xl">
                  Mr. Baron Billiards Bar
                </h1>

                {/* Subtle Text Shadow for Depth */}
                <div className="absolute inset-0 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white/20 tracking-wider -z-10">
                  Mr. Baron Billiards Bar
                </div>
              </div>

              {/* Elegant Subtitle */}
              <div className="relative">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-light tracking-wide mb-6 drop-shadow-lg">
                  {t('homepage.subtitle')}
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


            {/* Classic CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/menu"
                className="group relative inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-5 bg-white text-black font-serif font-bold text-lg sm:text-xl rounded-lg shadow-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 border-2 border-white/50 drop-shadow-md cursor-pointer"
              >
                <span className="relative z-10 tracking-wide">{t('homepage.viewMenu')}</span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
} 