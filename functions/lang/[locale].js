const SUPPORTED_LOCALES = new Set(["en", "es"]);
const COOKIE_NAME = "preferred_locale";
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

function safeDestination(url, locale) {
  const fallback = `/${locale}/`;
  const requested = url.searchParams.get("to");

  if (!requested || !requested.startsWith(fallback)) {
    return fallback;
  }

  return requested;
}

function setLocaleCookie(locale, request) {
  const url = new URL(request.url);
  const secure = url.protocol === "https:" ? "; Secure" : "";
  const destination = new URL(safeDestination(url, locale), url.origin);

  return new Response(null, {
    status: 302,
    headers: {
      Location: destination.toString(),
      "Cache-Control": "no-store",
      "Set-Cookie": `${COOKIE_NAME}=${encodeURIComponent(locale)}; Max-Age=${ONE_YEAR_SECONDS}; Path=/; SameSite=Lax${secure}`,
    },
  });
}

export function onRequestGet({ params, request }) {
  const locale = params.locale;

  if (!SUPPORTED_LOCALES.has(locale)) {
    return new Response("Unsupported locale", {
      status: 404,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }

  return setLocaleCookie(locale, request);
}

export const onRequestHead = onRequestGet;
