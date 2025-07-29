'use client';

import { useTranslations } from 'next-intl';
import MenuItem from '@/components/MenuItem';
import Image from 'next/image';

export default function MenuContent() {
  const t = useTranslations();

  // Define menu items directly to avoid translation issues
  const onTapItems = [
    {
      name: "DOGFISH HEAD 60 MINUTE IPA",
      location: "Milton, DE",
      price: "$6"
    },
    {
      name: "EAST END FAT GARY NUT BROWN ALE",
      location: "Pittsburgh, PA",
      price: "$6.5"
    },
    {
      name: "GREAT WHITE ALE",
      location: "Craft Beer",
      price: "$5.5"
    },
    {
      name: "ROGUE ALES SHAKESPEARE OATMEAL STOUT",
      location: "Oregon, USA",
      price: "$7"
    },
    {
      name: "FAT TIRE AMBER ALE",
      location: "Colorado, USA",
      price: "$6"
    },
    {
      name: "GUINNESS STOUT",
      location: "Ireland",
      price: "$6.5"
    }
  ];

  const cocktailsItems = [
    {
      name: "MAD DOG",
      description: "Tequila, crème de banana, white crème de cacao and fresh lime juice",
      price: "$8"
    },
    {
      name: "GODFATHER",
      description: "Scotch single malt and amaretto",
      price: "$9"
    },
    {
      name: "PISCO SOUR",
      description: "Pisco, lime juice, egg white, simple syrup",
      price: "$10"
    },
    {
      name: "LA VIE EN ROSE",
      description: "Gin, rose liqueur, elderflower, prosecco",
      price: "$11"
    },
    {
      name: "MELON BOWL",
      description: "Vodka, melon liqueur, fresh watermelon juice",
      price: "$9"
    },
    {
      name: "ULTIMATE MARGARITA",
      description: "Premium tequila, fresh lime, triple sec",
      price: "$12"
    }
  ];

  const foodItems = [
    {
      name: "TRUFFLE FRIES",
      description: "Crispy fries with truffle oil and parmesan",
      price: "$8"
    },
    {
      name: "BEEF SLIDERS",
      description: "Mini burgers with fries",
      price: "$14"
    },
    {
      name: "BUFFALO WINGS",
      description: "Spicy wings with blue cheese",
      price: "$12"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 relative z-10">
      {/* Enhanced Brand Header */}
      <div className="text-center lg:text-left mb-10">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10 rounded-2xl blur-xl"></div>

          {/* Main Content */}
          <div className="relative bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-500 mb-3 tracking-tight drop-shadow-lg">
              {t('menu.brandTitle')}
            </h1>
            <p className="text-lg sm:text-xl text-amber-200/90 font-light">
              {t('menu.brandSubtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Menu Categories with Centered Images */}
      <div className="space-y-12">

        {/* On Tap Section with Centered Beer Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Menu Content - Left Side */}
          <div className="space-y-6">
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-500 border-b-2 border-amber-500/40 pb-3 relative">
                {t('menu.sections.onTap.title')}
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
              </h2>
            </div>
            <div className="space-y-4 bg-gradient-to-br from-green-800/20 to-green-900/20 rounded-xl p-6 border border-green-700/30">
              {onTapItems.map((item, index) => (
                <div key={index} className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                  <div>
                    <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">{item.name}</h3>
                    <p className="text-sm text-amber-200/70">{item.location}</p>
                  </div>
                  <span className="text-lg font-bold text-amber-400">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Beer Image - Right Side */}
          <div className="flex justify-center items-center">
            <div className="relative h-80 sm:h-96 w-full max-w-md rounded-2xl overflow-hidden group shadow-2xl">
              <Image
                src="/beer.png"
                alt={t('menu.sections.onTap.imageAlt')}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl drop-shadow-lg">{t('menu.sections.onTap.imageTitle')}</h3>
                <p className="text-amber-200 text-lg">{t('menu.sections.onTap.imageSubtitle')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cocktails Section with Centered Cocktails Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Menu Content - Left Side */}
          <div className="space-y-6">
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-500 border-b-2 border-amber-500/40 pb-3 relative">
                {t('menu.sections.cocktails.title')}
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
              </h2>
            </div>
            <div className="space-y-4 bg-gradient-to-br from-green-800/20 to-green-900/20 rounded-xl p-6 border border-green-700/30">
              {cocktailsItems.map((item, index) => (
                <div key={index} className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">{item.name}</h3>
                    <p className="text-sm text-amber-200/70">{item.description}</p>
                  </div>
                  <span className="text-lg font-bold text-amber-400 ml-4">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Cocktails Image - Right Side */}
          <div className="flex justify-center items-center">
            <div className="relative h-80 sm:h-96 w-full max-w-md rounded-2xl overflow-hidden group shadow-2xl">
              <Image
                src="/cocktails.png"
                alt={t('menu.sections.cocktails.imageAlt')}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl drop-shadow-lg">{t('menu.sections.cocktails.imageTitle')}</h3>
                <p className="text-amber-200 text-lg">{t('menu.sections.cocktails.imageSubtitle')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Food Section with Centered Food Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Menu Content - Left Side */}
          <div className="space-y-6">
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-500 border-b-2 border-amber-500/40 pb-3 relative">
                {t('menu.sections.food.title')}
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
              </h2>
            </div>
            <div className="space-y-4 bg-gradient-to-br from-green-800/20 to-green-900/20 rounded-xl p-6 border border-green-700/30">
              {foodItems.map((item, index) => (
                <div key={index} className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                  <div>
                    <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">{item.name}</h3>
                    <p className="text-sm text-amber-200/70">{item.description}</p>
                  </div>
                  <span className="text-lg font-bold text-amber-400">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Food Image - Right Side */}
          <div className="flex justify-center items-center">
            <div className="relative h-80 sm:h-96 w-full max-w-md rounded-2xl overflow-hidden group shadow-2xl">
              <Image
                src="/food.png"
                alt={t('menu.sections.food.imageAlt')}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl drop-shadow-lg">{t('menu.sections.food.imageTitle')}</h3>
                <p className="text-amber-200 text-lg">{t('menu.sections.food.imageSubtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Menu Footer */}
      <section className="text-center mt-20">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10 rounded-3xl blur-2xl"></div>

          {/* Main Footer Container */}
          <div className="relative bg-gradient-to-br from-amber-500/15 via-amber-600/10 to-amber-500/15 border border-amber-500/30 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-100 mb-6 drop-shadow-lg">
              {t('menu.footer.title')}
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-amber-200/90 mb-8 sm:mb-10 max-w-4xl mx-auto font-light leading-relaxed">
              {t('menu.footer.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <div className="flex items-center justify-center space-x-3 text-amber-200 text-sm sm:text-base group">
                <span className="w-3 h-3 bg-amber-400 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                <span className="group-hover:text-amber-100 transition-colors">{t('menu.footer.features.0')}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-amber-200 text-sm sm:text-base group">
                <span className="w-3 h-3 bg-amber-400 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                <span className="group-hover:text-amber-100 transition-colors">{t('menu.footer.features.1')}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-amber-200 text-sm sm:text-base group">
                <span className="w-3 h-3 bg-amber-400 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                <span className="group-hover:text-amber-100 transition-colors">{t('menu.footer.features.2')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 