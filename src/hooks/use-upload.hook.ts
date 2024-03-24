import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { FilesAPI } from '~apis';
import type { FilesUploadDTO } from '~apis/dtos';
import type { AwaitedReturnType } from '~common/types';

const api = FilesAPI.upload;
type ApiReturnType = AwaitedReturnType<typeof api>;

export const useUpload = (options?: Omit<UseMutationOptions<ApiReturnType, Error, FilesUploadDTO>, 'mutationFn'>) => {
  return useMutation({
    ...options,
    mutationFn: api
  });
};
