'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations();
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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-900 via-green-800 to-green-900 shadow-2xl border-b border-amber-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-br  rounded-full flex items-center justify-center shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="Mr. Baron Logo"
                width={40}
                height={40}
                className="object-contain rounded-full "
              />
            </div>
            <div className="flex flex-col">
              <span className="text-amber-100 font-bold text-xl leading-tight">Mr. Baron</span>
              <span className="text-amber-200/80 text-sm leading-tight">Billiards Bar</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${currentLocale}`}
              className="group relative text-amber-100 hover:text-amber-300 transition-colors font-medium"
            >
              {t('navigation.home')}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              href={`/${currentLocale}/menu`}
              className="group relative text-amber-100 hover:text-amber-300 transition-colors font-medium"
            >
              {t('navigation.menu')}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="relative dropdown-container">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-lg text-amber-100 hover:bg-amber-500/30 transition-all duration-300"
            >
              <span className="text-lg">{getLanguageFlag(currentLocale)}</span>
              <span className="font-medium">{getLanguageName(currentLocale)}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gradient-to-br from-green-800 to-green-900 border border-amber-500/30 rounded-lg shadow-2xl shadow-amber-500/20 overflow-hidden">
                {['en', 'ru', 'hy', 'es', 'de', 'it', 'zh'].map((locale) => (
                  <Link
                    key={locale}
                    href={pathname.replace(`/${currentLocale}`, `/${locale}`)}
                    className="flex items-center space-x-3 px-4 py-3 text-amber-100 hover:bg-amber-500/20 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="text-lg">{getLanguageFlag(locale)}</span>
                    <span className="font-medium">{getLanguageName(locale)}</span>
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
