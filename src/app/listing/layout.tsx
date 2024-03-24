import type { Metadata } from 'next';
import { headers } from 'next/headers';
import type { PropsWithChildren, ReactNode } from 'react';
import { Authentication } from '~components';
import { FullHeightLayout } from '~layouts';
import { RainbowKitProvider, ReactQueryProvider, WagmiProvider } from '~providers';

type ListingLayoutProps = PropsWithChildren<Record<'unauthenticated' | 'mint' | 'nft', ReactNode>>;

const ListingLayout = ({ children, mint, nft, unauthenticated }: ListingLayoutProps) => {
  const cookies = headers().get('cookie');

  return (
    <WagmiProvider cookies={cookies}>
      <ReactQueryProvider>
        <RainbowKitProvider>
          <FullHeightLayout>
            <Authentication authenticated>
              {children}
              {mint}
              {nft}
            </Authentication>
            <Authentication authenticated={false}>{unauthenticated}</Authentication>
          </FullHeightLayout>
        </RainbowKitProvider>
      </ReactQueryProvider>
    </WagmiProvider>
  );
};

export const metadata: Metadata = {
  title: {
    default: 'Linum Labs',
    template: `%s | Linum Labs`
  }
};

export default ListingLayout;
