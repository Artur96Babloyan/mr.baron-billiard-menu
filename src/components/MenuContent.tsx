'use client';

import { useTranslations } from 'next-intl';
import MenuItem from '@/components/MenuItem';

export default function MenuContent() {
  const t = useTranslations();

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      {/* Cocktails Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-full px-8 py-4">
            <span className="text-3xl">🍸</span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-100">
              {t('menu.drinks.cocktails')}
            </h2>
            <span className="text-3xl">🥃</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuItem
            name={t('items.cocktails.moscowMule.name')}
            description={t('items.cocktails.moscowMule.description')}
            price={t('items.cocktails.moscowMule.price')}
            category="Signature"
            image="/images/cocktails/moscow-mule.jpg"
          />
          <MenuItem
            name={t('items.cocktails.oldFashioned.name')}
            description={t('items.cocktails.oldFashioned.description')}
            price={t('items.cocktails.oldFashioned.price')}
            category="Classic"
            image="/images/cocktails/old-fashioned.jpg"
          />
          <MenuItem
            name={t('items.cocktails.margarita.name')}
            description={t('items.cocktails.margarita.description')}
            price={t('items.cocktails.margarita.price')}
            category="Popular"
            isPopular={true}
            image="/images/cocktails/margarita.jpg"
          />
          <MenuItem
            name={t('items.cocktails.manhattan.name')}
            description={t('items.cocktails.manhattan.description')}
            price={t('items.cocktails.manhattan.price')}
            category="Classic"
            image="/images/cocktails/manhattan.jpg"
          />
          <MenuItem
            name={t('items.cocktails.negroni.name')}
            description={t('items.cocktails.negroni.description')}
            price={t('items.cocktails.negroni.price')}
            category="Italian"
            image="/images/cocktails/negroni.jpg"
          />
          <MenuItem
            name={t('items.cocktails.martini.name')}
            description={t('items.cocktails.martini.description')}
            price={t('items.cocktails.martini.price')}
            category="Classic"
            image="/images/cocktails/martini.jpg"
          />
        </div>
      </section>

      {/* Beer Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-full px-8 py-4">
            <span className="text-3xl">🍺</span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-100">
              {t('menu.drinks.beer')}
            </h2>
            <span className="text-3xl">🍻</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuItem
            name={t('items.beer.craftLager.name')}
            description={t('items.beer.craftLager.description')}
            price={t('items.beer.craftLager.price')}
            category="Local"
            image="/images/beer/craft-lager.jpg"
          />
          <MenuItem
            name={t('items.beer.ipa.name')}
            description={t('items.beer.ipa.description')}
            price={t('items.beer.ipa.price')}
            category="Craft"
            image="/images/beer/ipa.jpg"
          />
          <MenuItem
            name={t('items.beer.stout.name')}
            description={t('items.beer.stout.description')}
            price={t('items.beer.stout.price')}
            category="Dark"
            image="/images/beer/stout.jpg"
          />
          <MenuItem
            name={t('items.beer.wheat.name')}
            description={t('items.beer.wheat.description')}
            price={t('items.beer.wheat.price')}
            category="Light"
            image="/images/beer/wheat.jpg"
          />
        </div>
      </section>

      {/* Wine Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-full px-8 py-4">
            <span className="text-3xl">🍷</span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-100">
              {t('menu.drinks.wine')}
            </h2>
            <span className="text-3xl">🥂</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuItem
            name={t('items.wine.red.name')}
            description={t('items.wine.red.description')}
            price={t('items.wine.red.price')}
            category="Red"
            image="/images/wine/red-wine.jpg"
          />
          <MenuItem
            name={t('items.wine.white.name')}
            description={t('items.wine.white.description')}
            price={t('items.wine.white.price')}
            category="White"
            image="/images/wine/white-wine.jpg"
          />
          <MenuItem
            name={t('items.wine.rose.name')}
            description={t('items.wine.rose.description')}
            price={t('items.wine.rose.price')}
            category="Rosé"
            image="/images/wine/rose-wine.jpg"
          />
        </div>
      </section>

      {/* Snacks Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-full px-8 py-4">
            <span className="text-3xl">🍽️</span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-100">
              {t('menu.categories.snacks')}
            </h2>
            <span className="text-3xl">🥨</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuItem
            name={t('items.snacks.nachos.name')}
            description={t('items.snacks.nachos.description')}
            price={t('items.snacks.nachos.price')}
            category="Popular"
            image="/images/snacks/nachos.jpg"
          />
          <MenuItem
            name={t('items.snacks.wings.name')}
            description={t('items.snacks.wings.description')}
            price={t('items.snacks.wings.price')}
            category="Spicy"
            isPopular={true}
            image="/images/snacks/wings.jpg"
          />
          <MenuItem
            name={t('items.snacks.sliders.name')}
            description={t('items.snacks.sliders.description')}
            price={t('items.snacks.sliders.price')}
            category="Main"
            image="/images/snacks/sliders.jpg"
          />
          <MenuItem
            name={t('items.snacks.fries.name')}
            description={t('items.snacks.fries.description')}
            price={t('items.snacks.fries.price')}
            category="Side"
            image="/images/snacks/fries.jpg"
          />
          <MenuItem
            name={t('items.snacks.pretzel.name')}
            description={t('items.snacks.pretzel.description')}
            price={t('items.snacks.pretzel.price')}
            category="Snack"
            image="/images/snacks/pretzel.jpg"
          />
        </div>
      </section>

      {/* Specials Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-full px-8 py-4">
            <span className="text-3xl">🎉</span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-100">
              {t('menu.categories.specials')}
            </h2>
            <span className="text-3xl">⭐</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-full md:col-span-1">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-2 border-amber-500/40 shadow-lg shadow-amber-500/20 p-8 hover:scale-105 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-amber-100">
                    {t('specials.happyHour.title')}
                  </h3>
                  <span className="text-3xl">🎉</span>
                </div>
                <p className="text-amber-200/90 mb-6 leading-relaxed">
                  {t('specials.happyHour.description')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-400">
                    {t('specials.happyHour.discount')}
                  </span>
                  <div className="flex space-x-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-100"></span>
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-200"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Footer */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-amber-100 mb-4">
            Visit Us Today
          </h3>
          <p className="text-xl text-amber-200/90 mb-8">
            Experience the perfect blend of premium billiards and exceptional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-amber-200">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              <span>Premium Tables</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-amber-200">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              <span>Craft Cocktails</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-amber-200">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              <span>Tournaments</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 