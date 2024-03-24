import type { Metadata } from 'next';
import { type PropsWithChildren } from 'react';
import { twJoin } from 'tailwind-merge';
import '~/assets/css/theme.css';
import { Toast } from '~components';
import { appConfig, uiConfig } from '~configs';
import { ThemeProvider } from '~providers';

type RootLayoutProps = PropsWithChildren;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang={appConfig.defaultLocale}
      dir="ltr"
      className={twJoin(uiConfig.fonts.fontInter.variable, uiConfig.fonts.fontComfortaa.variable)}>
      <body>
        <ThemeProvider>
          {children}
          <Toast />
        </ThemeProvider>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: {
    default: 'Linum Labs',
    template: `%s | Linum Labs`
  }
};

export default RootLayout;
