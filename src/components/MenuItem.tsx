import Image from 'next/image';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  category?: string;
  isSpecial?: boolean;
  isPopular?: boolean;
  image?: string;
}

export default function MenuItem({ name, description, price, category, isSpecial = false, isPopular = false, image }: MenuItemProps) {
  return (
    <div className={`group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-105 ${isSpecial
      ? 'bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-2 border-amber-500/40 shadow-lg shadow-amber-500/20'
      : 'bg-gradient-to-br from-green-800/60 to-green-900/60 border border-green-700/50 hover:border-amber-500/50'
      }`}>
      {/* Paper texture effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Image Section */}
        {image && (
          <div className="mb-4 relative">
            <div className="w-full h-48 bg-gradient-to-br from-green-800 to-green-900 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={name}
                width={400}
                height={200}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {isPopular && (
              <div className="absolute top-2 right-2">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  POPULAR
                </span>
              </div>
            )}
            {isSpecial && (
              <div className="absolute top-2 left-2">
                <span className="bg-amber-500 text-green-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  SPECIAL
                </span>
              </div>
            )}
          </div>
        )}

        {/* Header with name and price */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className={`text-xl font-bold ${isSpecial ? 'text-amber-100' : 'text-amber-100'
                }`}>
                {name}
              </h4>
              {isPopular && !image && (
                <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-medium">
                  POPULAR
                </span>
              )}
            </div>
            {category && (
              <span className="inline-block px-2 py-1 text-xs font-medium bg-amber-500/20 text-amber-300 rounded-full">
                {category}
              </span>
            )}
          </div>
          <div className="flex flex-col items-end">
            <span className={`text-2xl font-bold ${isSpecial ? 'text-amber-400' : 'text-amber-400'
              }`}>
              {price}
            </span>
            {isSpecial && !image && (
              <span className="text-xs text-amber-300 font-medium">SPECIAL</span>
            )}
          </div>
        </div>

        {/* Description with elegant typography */}
        <p className="text-amber-200/80 text-sm leading-relaxed font-light">
          {description}
        </p>

        {/* Decorative line */}
        <div className="mt-4 w-16 h-px bg-gradient-to-r from-amber-500/50 to-transparent"></div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </div>

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] ${isSpecial ? 'border-t-amber-500' : 'border-t-green-700'
        } opacity-50`}></div>
    </div>
  );
}
