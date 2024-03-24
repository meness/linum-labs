'use client';

import { cookieToInitialState } from 'wagmi';
import { wagmiConfig } from '~configs';

export const useWagmiInitialState = (cookies: string | null) => {
  return cookieToInitialState(wagmiConfig, cookies);
};
