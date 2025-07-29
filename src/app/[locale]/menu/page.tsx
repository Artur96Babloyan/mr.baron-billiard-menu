import MenuContent from '@/components/MenuContent';
import Navbar from '@/components/Navbar';
import MenuHeader from '@/components/MenuHeader';
import Image from 'next/image';

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
        <Image
          src="/menu-background.png"
          alt="Menu Background"
          fill
          className="object-cover"
          priority
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

      <MenuHeader />

      <MenuContent />
    </div>
  );
}
