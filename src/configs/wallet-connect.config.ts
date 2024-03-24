'use client';

import { walletConnect } from 'wagmi/connectors';

export const walletConnectConfig = walletConnect({
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID
});
