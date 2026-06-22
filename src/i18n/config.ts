export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export const cvByLocale: Record<Locale, string> = {
  en: "/cv/anibal-fermandois-en-2026.pdf",
  es: "/cv/anibal-fermandois-es-2026.pdf",
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalePath(locale: Locale): string {
  return `/${locale}/`;
}
