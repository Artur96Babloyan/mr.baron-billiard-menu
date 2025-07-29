'use client';

import { useTranslations } from 'next-intl';

export default function MenuTitle() {
  const t = useTranslations();

  return (
    <div className="text-center mb-12">
      {/* Top Decorative Elements */}
      <div className="flex justify-center items-center mb-6">
        <div className="w-8 h-px bg-white/60"></div>
        <div className="w-2 h-2 bg-white/60 rounded-full mx-4"></div>
        <div className="w-8 h-px bg-white/60"></div>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 tracking-wider">
        {t('menu.brandTitle')}
      </h1>
      {/* Bottom Decorative Elements */}
      <div className="flex justify-center items-center">
        <div className="w-8 h-px bg-white/60"></div>
        <div className="w-2 h-2 bg-white/60 rounded-full mx-4"></div>
        <div className="w-8 h-px bg-white/60"></div>
      </div>
    </div>
  );
} 