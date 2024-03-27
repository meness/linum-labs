import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { UploadAPI } from '~apis';
import type { AwaitedReturnType } from '~common/types';

const api = UploadAPI.pinFile;
type ApiReturnType = AwaitedReturnType<typeof api>;

export const usePinFile = (options?: Omit<UseMutationOptions<ApiReturnType, Error, Blob>, 'mutationFn'>) => {
  return useMutation({
    ...options,
    mutationFn: api
  });
};
