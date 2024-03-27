import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { UploadAPI } from '~apis';
import type { AwaitedReturnType } from '~common/types';

const api = UploadAPI.pinJSON;
type ApiReturnType = AwaitedReturnType<typeof api>;

export const usePinJSON = (options?: Omit<UseMutationOptions<ApiReturnType, Error, Object>, 'mutationFn'>) => {
  return useMutation({
    ...options,
    mutationFn: api
  });
};
