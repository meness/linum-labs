import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { MetadataAPI } from '~apis';
import type { AwaitedReturnType } from '~common/types';

const api = MetadataAPI.getMetadata;
type ApiReturnType = AwaitedReturnType<typeof api>;

export const useMetadata = (
  tokenURI: string,
  options?: Omit<UseQueryOptions<ApiReturnType, Error, ApiReturnType, string[]>, 'queryFn'>
) => {
  return useQuery({
    ...options,
    queryKey: ['metadata', tokenURI],
    enabled: !!tokenURI,
    queryFn: () => {
      return api(tokenURI);
    }
  });
};
