import { nextui } from '@nextui-org/theme';
import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/app/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
    './src/assets/css/**/*.css',
    './node_modules/@nextui-org/theme/dist/components/(avatar|button|card|input|link|modal|navbar|switch|image).js'
  ],
  darkMode: 'class',
  plugins: [nextui()],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-comfortaa)']
      }
    }
  }
} satisfies Config;
