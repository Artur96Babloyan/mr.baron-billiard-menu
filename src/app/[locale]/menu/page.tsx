import MenuContent from '@/components/MenuContent';
import Navbar from '@/components/Navbar';

export default async function MenuPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  await params; // Ensure params is awaited but we don't need locale here

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/menu-background.png"
          alt="Menu Background"
          className="w-full h-full object-cover"
        />
        {/* Multiple Gradient Overlays for Professional Look */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/85 via-green-900/75 to-green-800/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 via-transparent to-amber-500/15"></div>
      </div>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-xl animate-pulse z-0"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-amber-400/10 rounded-full blur-lg animate-pulse delay-1000 z-0"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-amber-600/5 rounded-full blur-2xl animate-pulse delay-2000 z-0"></div>

      <Navbar />

      {/* Enhanced Menu Header */}
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
                  Our Menu
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

      <MenuContent />
    </div>
  );
}
