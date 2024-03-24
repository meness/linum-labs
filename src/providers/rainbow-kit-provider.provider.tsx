'use client';

import { RainbowKitProvider as RainbowKitProviderOrg } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import type { PropsWithChildren } from 'react';
import { rainbowkitConfig } from '~configs';

type RainbowKitProviderProps = PropsWithChildren;

export const RainbowKitProvider = ({ children }: RainbowKitProviderProps) => {
  return (
    <RainbowKitProviderOrg
      theme={rainbowkitConfig}
      showRecentTransactions={false}
      modalSize="compact">
      {children}
    </RainbowKitProviderOrg>
  );
};
