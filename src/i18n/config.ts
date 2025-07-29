export const locales = ["en", "ru", "hy"] as const;
export const defaultLocale = "hy" as const;

export type Locale = (typeof locales)[number];
