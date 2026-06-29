import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["es", "en"],

  // Used when no locale matches
  defaultLocale: "es",

  // CRITICAL FOR STATIC EXPORT:
  // Must be 'always' because static exports cannot use middleware
  // to rewrite the default locale to the root path (/).
  // Every locale must have a prefix (e.g., /en, /de, /fr).
  localePrefix: "always",

  // Optional: Define localized pathnames if URLs should differ by language
  // pathnames: {
  //   '/': '/',
  //   '/about': {
  //     en: '/about',
  //     de: '/uber-uns',
  //     fr: '/a-propos'
  //   }
  // }
});

// Lightweight wrappers around Next.js' navigation APIs
// that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

// Export types for usage in your app
export type Locale = (typeof routing.locales)[number];
