import Link from 'next/link';
import { defaultLocale } from '@/i18n/config';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-amber-100 mb-6">404</h1>
        <p className="text-xl text-amber-200 mb-8">Page not found</p>
        <Link
          href={`/${defaultLocale}`}
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-green-900 font-bold rounded-lg hover:scale-105 transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
} 