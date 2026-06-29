import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { IntlErrorCode } from "next-intl";

export default getRequestConfig(async ({ locale = "es" }) => {
  if (!locale || !routing.locales.includes(locale as any)) {
    // Fallback to default if invalid, crucial for static export safety
    locale = routing.defaultLocale;
  }

  const forcedLocale = process.env.FORCE_LOCALE;

  if (forcedLocale) {
    locale = forcedLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // Missing translations are expected and should only log an error
        console.error(error);
      } else {
        console.error(error);
        // Other errors indicate a bug in the app and should be reported
        //reportToErrorTracking(error);
      }
    },
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter((part) => part != null).join(".");

      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return path + " is not yet translated";
      } else {
        return "Dear developer, please fix this message: " + path;
      }
    },
  };
});
