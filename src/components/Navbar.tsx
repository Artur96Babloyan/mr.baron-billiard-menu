'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && !(event.target as Element).closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const getLanguageName = (locale: string) => {
    const names: { [key: string]: string } = {
      en: 'English',
      ru: 'Русский',
      hy: 'Հայերեն',
      es: 'Español',
      de: 'Deutsch',
      it: 'Italiano',
      zh: '中文'
    };
    return names[locale] || locale;
  };

  const getLanguageFlag = (locale: string) => {
    const flags: { [key: string]: string } = {
      en: '🇺🇸',
      ru: '🇷🇺',
      hy: '🇦🇲',
      es: '🇪🇸',
      de: '🇩🇪',
      it: '🇮🇹',
      zh: '🇨🇳'
    };
    return flags[locale] || '🌐';
  };

  const getCurrentLocale = () => {
    const path = pathname.split('/')[1];
    return ['en', 'ru', 'hy', 'es', 'de', 'it', 'zh'].includes(path) ? path : 'en';
  };

  const currentLocale = getCurrentLocale();

  return (
    <nav className="sticky top-0 z-50 bg-black/5 backdrop-blur-md shadow-xl border-b border-[#D9D1C4]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Classic Logo */}
          <Link href={`/${currentLocale}`} className="flex items-center space-x-3 sm:space-x-4 group">
            <Image
              src="/logo.png"
              alt="Mr. Baron Logo"
              width={64}
              height={64}
              priority
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover shadow-lg ring-1 ring-[#D9B86A]/50 group-hover:ring-[#D9B86A] transition-all duration-300"
            />
            <div className="flex flex-col">
              <span className="text-white font-serif font-bold text-xl sm:text-2xl leading-tight tracking-wide drop-shadow-lg">Mr. Baron</span>
              <span className="text-white/90 font-serif text-sm sm:text-base leading-tight tracking-wider drop-shadow-md">Billiards Bar</span>
            </div>
          </Link>

          {/* Empty space for centering */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          </div>

          {/* Classic Language Switcher */}
          <div className="relative dropdown-container">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2 bg-black/10 border border-white/30 rounded-lg text-white hover:bg-black/20 hover:border-white/50 transition-all duration-300 text-sm shadow-md hover:shadow-xl hover:shadow-white/20 font-serif drop-shadow-md cursor-pointer"
            >
              <span className="text-base sm:text-lg">{getLanguageFlag(currentLocale)}</span>
              <span className="font-medium hidden sm:block tracking-wide">{getLanguageName(currentLocale)}</span>
              <span className="font-medium sm:hidden tracking-wide text-xs">{currentLocale.toUpperCase()}</span>
              <svg
                className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Classic Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 min-w-full bg-black/80 backdrop-blur-md border border-white/30 rounded-lg shadow-xl overflow-hidden">
                {['en', 'ru', 'hy'].map((locale) => (
                  <Link
                    key={locale}
                    href={pathname.replace(`/${currentLocale}`, `/${locale}`)}
                    className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 transition-colors text-sm font-serif whitespace-nowrap drop-shadow-sm cursor-pointer"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="text-base sm:text-lg">{getLanguageFlag(locale)}</span>
                    <span className="font-medium hidden sm:block tracking-wide">{getLanguageName(locale)}</span>
                    <span className="font-medium sm:hidden tracking-wide text-xs">{locale.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>


        </div>


      </div>
    </nav>
  );
}
