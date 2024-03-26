'use client';

import { cookieStorage, createConfig, createStorage, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { walletConnectConfig } from './wallet-connect.config';

export const wagmiConfig = createConfig({
  connectors: [walletConnectConfig],
  chains: [sepolia],
  ssr: true,
  transports: {
    [sepolia.id]: http()
  },
  storage: createStorage({
    storage: cookieStorage
  })
});
