'use client';

import { useTranslations } from 'next-intl';
import MenuItem from '@/components/MenuItem';
import Image from 'next/image';

export default function MenuContent() {
  const t = useTranslations();

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
              Mr.Baron Menu
            </h1>
            <p className="text-lg sm:text-xl text-amber-200/90 font-light">
              COCKTAILS + BEER + FOOD
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
                ON TAP
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
              </h2>
            </div>
            <div className="space-y-4 bg-gradient-to-br from-green-800/20 to-green-900/20 rounded-xl p-6 border border-green-700/30">
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">DOGFISH HEAD 60 MINUTE IPA</h3>
                  <p className="text-sm text-amber-200/70">Milton, DE</p>
                </div>
                <span className="text-lg font-bold text-amber-400">$6</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">EAST END FAT GARY NUT BROWN ALE</h3>
                  <p className="text-sm text-amber-200/70">Pittsburgh, PA</p>
                </div>
                <span className="text-lg font-bold text-amber-400">$6.5</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">GREAT WHITE ALE</h3>
                  <p className="text-sm text-amber-200/70">Craft Beer</p>
                </div>
                <span className="text-lg font-bold text-amber-400">$5.5</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">ROGUE ALES SHAKESPEARE OATMEAL STOUT</h3>
                  <p className="text-sm text-amber-200/70">Oregon, USA</p>
                </div>
                <span className="text-lg font-bold text-amber-400">$7</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">FAT TIRE AMBER ALE</h3>
                  <p className="text-sm text-amber-200/70">Colorado, USA</p>
                </div>
                <span className="text-lg font-bold text-amber-400">$6</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">GUINNESS STOUT</h3>
                  <p className="text-sm text-amber-200/70">Ireland</p>
                </div>
                <span className="text-lg font-bold text-amber-400">$6.5</span>
              </div>
            </div>
          </div>

          {/* Centered Beer Image - Right Side */}
          <div className="flex justify-center items-center">
            <div className="relative h-80 sm:h-96 w-full max-w-md rounded-2xl overflow-hidden group shadow-2xl">
              <Image
                src="/beer.png"
                alt="Craft Beers - On Tap"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl drop-shadow-lg">Craft Beers</h3>
                <p className="text-amber-200 text-lg">Premium selection</p>
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
                COCKTAILS
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
              </h2>
            </div>
            <div className="space-y-4 bg-gradient-to-br from-green-800/20 to-green-900/20 rounded-xl p-6 border border-green-700/30">
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">MAD DOG</h3>
                  <p className="text-sm text-amber-200/70">Tequila, crème de banana, white crème de cacao and fresh lime juice</p>
                </div>
                <span className="text-lg font-bold text-amber-400 ml-4">$8</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">GODFATHER</h3>
                  <p className="text-sm text-amber-200/70">Scotch single malt and amaretto</p>
                </div>
                <span className="text-lg font-bold text-amber-400 ml-4">$9</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">PISCO SOUR</h3>
                  <p className="text-sm text-amber-200/70">Pisco, lime juice, egg white, simple syrup</p>
                </div>
                <span className="text-lg font-bold text-amber-400 ml-4">$10</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">LA VIE EN ROSE</h3>
                  <p className="text-sm text-amber-200/70">Gin, rose liqueur, elderflower, prosecco</p>
                </div>
                <span className="text-lg font-bold text-amber-400 ml-4">$11</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">MELON BOWL</h3>
                  <p className="text-sm text-amber-200/70">Vodka, melon liqueur, fresh watermelon juice</p>
                </div>
                <span className="text-lg font-bold text-amber-400 ml-4">$9</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">ULTIMATE MARGARITA</h3>
                  <p className="text-sm text-amber-200/70">Premium tequila, fresh lime, triple sec</p>
                </div>
                <span className="text-lg font-bold text-amber-400 ml-4">$12</span>
              </div>
            </div>
          </div>

          {/* Centered Cocktails Image - Right Side */}
          <div className="flex justify-center items-center">
            <div className="relative h-80 sm:h-96 w-full max-w-md rounded-2xl overflow-hidden group shadow-2xl">
              <Image
                src="/cocktails.png"
                alt="Craft Cocktails"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl drop-shadow-lg">Craft Cocktails</h3>
                <p className="text-amber-200 text-lg">Handcrafted perfection</p>
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
                FOOD
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
              </h2>
            </div>
            <div className="space-y-4 bg-gradient-to-br from-green-800/20 to-green-900/20 rounded-xl p-6 border border-green-700/30">
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">TRUFFLE FRIES</h3>
                  <p className="text-sm text-amber-200/70">Crispy fries with truffle oil and parmesan</p>
                </div>
                <span className="text-lg font-bold text-amber-400">$8</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">BEEF SLIDERS</h3>
                  <p className="text-sm text-amber-200/70">Mini burgers with fries</p>
                </div>
                <span className="text-lg font-bold text-amber-400">$14</span>
              </div>
              <div className="flex justify-between items-start group hover:bg-amber-500/5 rounded-lg p-2 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">BUFFALO WINGS</h3>
                  <p className="text-sm text-amber-200/70">Spicy wings with blue cheese</p>
                </div>
                <span className="text-lg font-bold text-amber-400">$12</span>
              </div>
            </div>
          </div>

          {/* Centered Food Image - Right Side */}
          <div className="flex justify-center items-center">
            <div className="relative h-80 sm:h-96 w-full max-w-md rounded-2xl overflow-hidden group shadow-2xl">
              <Image
                src="/food.png"
                alt="Bar Snacks & Food"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl drop-shadow-lg">Bar Snacks</h3>
                <p className="text-amber-200 text-lg">Delicious bites</p>
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
              Visit Us Today
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-amber-200/90 mb-8 sm:mb-10 max-w-4xl mx-auto font-light leading-relaxed">
              Experience the perfect blend of premium billiards and exceptional service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <div className="flex items-center justify-center space-x-3 text-amber-200 text-sm sm:text-base group">
                <span className="w-3 h-3 bg-amber-400 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                <span className="group-hover:text-amber-100 transition-colors">Premium Tables</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-amber-200 text-sm sm:text-base group">
                <span className="w-3 h-3 bg-amber-400 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                <span className="group-hover:text-amber-100 transition-colors">Craft Cocktails</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-amber-200 text-sm sm:text-base group">
                <span className="w-3 h-3 bg-amber-400 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                <span className="group-hover:text-amber-100 transition-colors">Tournaments</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 