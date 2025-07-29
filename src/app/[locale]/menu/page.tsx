import PDFMenuViewer from '@/components/PDFMenuViewer';
import Navbar from '@/components/Navbar';
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
          src="/home-background.png"
          alt="Mr. Baron Billiards Bar Background"
          fill
          className="object-cover"
          priority
        />
        {/* Classic Black Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30"></div>
      </div>

      <Navbar />

      <PDFMenuViewer />
    </div>
  );
}
