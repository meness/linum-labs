const onProduction = process.env.NEXT_PUBLIC_APP_ENV === 'production';
const onStaging = process.env.NEXT_PUBLIC_APP_ENV === 'staging';
const onDevelopment = process.env.NEXT_PUBLIC_APP_ENV === 'development';
const onProductionOrStaging = onProduction || onStaging;

export const appConfig = {
  env: {
    onDevelopment,
    onProductionOrStaging,
    onProduction,
    onStaging
  },
  defaultLocale: 'en',
  // Remember to change the middleware's config variable
  availableLocales: {
    en: {
      direction: 'ltr'
    }
  },
  darkModeStoreKey: 'dark-mode'
} as const;
