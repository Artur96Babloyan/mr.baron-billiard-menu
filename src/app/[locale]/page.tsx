import { unstable_setRequestLocale } from 'next-intl/server';
import HomeContent from '@/components/HomeContent';
import Navbar from '@/components/Navbar';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-800 relative overflow-hidden">
      <Navbar />
      <HomeContent />
    </div>
  );
}
