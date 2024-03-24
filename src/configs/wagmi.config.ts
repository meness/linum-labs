'use client';

import { createPublicClient } from 'viem';
import { cookieStorage, createConfig, createStorage, http } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { walletConnectConfig } from './wallet-connect.config';

export const wagmiConfig = createConfig({
  connectors: [walletConnectConfig],
  chains: [goerli],
  ssr: true,
  transports: {
    [goerli.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_ENDPOINT)
  },
  storage: createStorage({
    storage: cookieStorage
  })
});

export const publicClient = createPublicClient({
  chain: goerli,
  transport: http(process.env.NEXT_PUBLIC_ALCHEMY_ENDPOINT)
});
