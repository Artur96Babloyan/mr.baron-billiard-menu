import HomeContent from '@/components/HomeContent';
import Navbar from '@/components/Navbar';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  await params; // Ensure params is awaited but we don't need locale here

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <HomeContent />
    </div>
  );
}
