import { Comfortaa, Inter } from 'next/font/google';

const fontInter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter'
});

const fontComfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-comfortaa'
});

export const uiConfig = {
  fonts: {
    fontInter,
    fontComfortaa
  }
};
