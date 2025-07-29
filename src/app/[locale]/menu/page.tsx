import MenuContent from '@/components/MenuContent';
import Navbar from '@/components/Navbar';

export default async function MenuPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  await params; // Ensure params is awaited but we don't need locale here

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-800 relative overflow-hidden">
      <Navbar />

      {/* Menu Header */}
      <section className="relative text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-3xl p-12">
            <h1 className="text-5xl md:text-7xl font-black text-amber-100 mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Our Menu
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-amber-200/80 max-w-2xl mx-auto">
              Premium Drinks • Craft Cocktails • Delicious Snacks
            </p>
          </div>
        </div>
      </section>

      <MenuContent />
    </div>
  );
}
