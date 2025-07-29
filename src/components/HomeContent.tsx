'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomeContent() {
  const t = useTranslations();

  return (
    <section className="relative text-center py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-amber-100 mb-8 leading-tight">
            Mr. Baron Billiards Bar
          </h1>
          <p className="text-3xl md:text-4xl text-amber-200 mb-12 font-light">
            {t('homepage.subtitle')}
          </p>
          <p className="text-xl text-amber-100/90 mb-16 max-w-3xl mx-auto leading-relaxed">
            {t('homepage.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/menu"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-green-900 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">{t('homepage.viewMenu')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 