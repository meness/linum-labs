'use client';

import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
import type { PropsWithChildren } from 'react';

type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </NextUIProvider>
  );
};
