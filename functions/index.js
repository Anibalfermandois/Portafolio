const SPANISH_RECOMMENDED_COUNTRIES = new Set([
  "AR",
  "BO",
  "BR",
  "CL",
  "CO",
  "EC",
  "FK",
  "GF",
  "GY",
  "MX",
  "PY",
  "PE",
  "SR",
  "UY",
  "VE",
]);

const SUPPORTED_LOCALES = new Set(["en", "es"]);
const DEFAULT_LOCALE = "en";
const COOKIE_NAME = "preferred_locale";

function parseCookie(header) {
  return Object.fromEntries(
    (header || "")
      .split(";")
      .map((part) => part.trim().split("="))
      .filter(([key, value]) => key && value)
      .map(([key, value]) => [key, decodeURIComponent(value)]),
  );
}

function redirectTo(locale, request) {
  const url = new URL(request.url);
  const location = new URL(`/${locale}/${url.search}`, url.origin);

  return new Response(null, {
    status: 302,
    headers: {
      Location: location.toString(),
      "Cache-Control": "no-store",
    },
  });
}

function pickLocale(request) {
  const cookies = parseCookie(request.headers.get("Cookie"));
  const preferredLocale = cookies[COOKIE_NAME];

  if (SUPPORTED_LOCALES.has(preferredLocale)) {
    return preferredLocale;
  }

  const country = request.cf?.country;
  if (country && SPANISH_RECOMMENDED_COUNTRIES.has(country)) {
    return "es";
  }

  return DEFAULT_LOCALE;
}

export function onRequestGet({ request }) {
  return redirectTo(pickLocale(request), request);
}

export function onRequestHead({ request }) {
  return redirectTo(pickLocale(request), request);
}
