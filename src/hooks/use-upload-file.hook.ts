import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { UploadAPI } from '~apis';
import type { FilesUploadDTO } from '~apis/dtos';
import type { AwaitedReturnType } from '~common/types';

const api = UploadAPI.pinFile;
type ApiReturnType = AwaitedReturnType<typeof api>;

export const useUploadFile = (
  options?: Omit<UseMutationOptions<ApiReturnType, Error, FilesUploadDTO>, 'mutationFn'>
) => {
  return useMutation({
    ...options,
    mutationFn: api
  });
};
