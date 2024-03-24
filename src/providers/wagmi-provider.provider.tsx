'use client';

import type { PropsWithChildren } from 'react';
import { WagmiProvider as WagmiProviderOrg } from 'wagmi';
import { wagmiConfig } from '~configs';
import { useWagmiInitialState } from '~hooks';

type ThemeProviderProps = PropsWithChildren<{ cookies: string | null }>;

export const WagmiProvider = ({ cookies, children }: ThemeProviderProps) => {
  const wagmiInitialState = useWagmiInitialState(cookies);

  return (
    <WagmiProviderOrg
      config={wagmiConfig}
      initialState={wagmiInitialState}>
      {children}
    </WagmiProviderOrg>
  );
};
