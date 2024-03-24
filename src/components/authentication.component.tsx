'use client';

import type { PropsWithChildren } from 'react';
import { useAccount } from 'wagmi';
import { wagmiConfig } from '~configs';

type AuthenticationProps = PropsWithChildren<{ authenticated?: boolean }>;

export const Authentication = ({ authenticated, children }: AuthenticationProps) => {
  const { chainId, isConnected } = useAccount();
  const isChainSupported = wagmiConfig.chains.some((chain) => {
    return chainId === chain.id;
  });

  if (authenticated) {
    if (isConnected && isChainSupported) {
      return children;
    }
  } else if (!authenticated) {
    if (!isConnected || !isChainSupported) {
      return children;
    }
  }

  return null;
};
