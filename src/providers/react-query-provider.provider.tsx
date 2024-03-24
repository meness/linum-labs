'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type PropsWithChildren } from 'react';
import { makeReactQueryConfig } from '~configs';

type ReactQueryProviderProps = PropsWithChildren;

let browserQueryClient: QueryClient | undefined;

const getQueryClient = () => {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeReactQueryConfig();
  }

  // Browser: make a new query client if we don't already have one
  // This is very important so we don't re-make a new client if React
  // suspends during the initial render. This may not be needed if we
  // have a suspense boundary BELOW the creation of the query client
  if (!browserQueryClient) browserQueryClient = makeReactQueryConfig();
  return browserQueryClient;
};

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
