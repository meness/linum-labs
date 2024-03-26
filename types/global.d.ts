import type { Address } from 'viem';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly NEXT_PUBLIC_APP_ENV: 'production' | 'staging' | 'development';
      readonly NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: string;
      readonly NEXT_PUBLIC_NFT_ADDRESS: Address;
      readonly PINATA_JWT: string;
      readonly PINATA_GATEWAY_URL: string;
    }
  }
}

export {};
