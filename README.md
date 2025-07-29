# Mr. Baron Billiards Bar Website

A professional multilingual website for Mr. Baron Billiards Bar built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌍 **Multilingual Support**: English, Russian, Armenian, Spanish, German, Italian, Chinese
- 📱 **Responsive Design**: Works perfectly on mobile and desktop
- 🎨 **Professional Design**: Dark green and beige color palette inspired by billiard bars
- 🍸 **Menu System**: Organized categories for drinks, snacks, and specials
- 🔍 **SEO Optimized**: Meta tags and structured content for search engines
- ⚡ **Fast Performance**: Built with Next.js App Router for optimal performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx      # Locale-specific layout
│   │   ├── page.tsx        # Homepage
│   │   └── menu/
│   │       └── page.tsx    # Menu page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Root redirect
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── MenuItem.tsx        # Menu item component
├── i18n/
│   ├── config.ts           # Locale configuration
│   ├── index.ts            # i18n setup
│   └── locales/            # Translation files
│       ├── en.json
│       ├── ru.json
│       ├── hy.json
│       ├── es.json
│       ├── de.json
│       ├── it.json
│       └── zh.json
└── middleware.ts           # Internationalization middleware
```

## Adding New Content

### Adding Menu Items

1. Update the translation files in `src/i18n/locales/`
2. Add new items to the menu structure
3. Update the MenuPage component to display new items

### Adding New Languages

1. Create a new translation file in `src/i18n/locales/`
2. Add the locale to the `locales` array in `src/i18n/config.ts`

### Adding New Pages

1. Create a new page in `src/app/[locale]/`
2. Add navigation links in the Navbar component
3. Update translation files with new content

## Deployment

The website is ready for deployment on any static hosting platform:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the build folder
- **GitHub Pages**: Use the `gh-pages` branch

## Customization

### Colors

The color palette is defined in `tailwind.config.ts`:
- `billiard-green`: Various shades of green
- `billiard-amber`: Various shades of amber/beige

### Styling

All styles use Tailwind CSS classes. The design follows a dark theme with:
- Background: Dark green gradient
- Text: Amber/beige colors
- Accents: Amber highlights

## License

This project is open source and available under the MIT License.
