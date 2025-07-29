export const locales = ["en", "ru", "hy", "es", "de", "it", "zh"] as const;
export const defaultLocale = "hy" as const;

export type Locale = (typeof locales)[number];
