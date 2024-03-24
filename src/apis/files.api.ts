import { axiosConfig } from '~configs';
import type { FilesUploadResponse } from '~entities';
import type { FilesUploadDTO } from './dtos';

export const FilesAPI = {
  upload: async ({ file }: FilesUploadDTO) => {
    const formData = new FormData();

    formData.append('file', file);

    const { data } = await axiosConfig.post<FilesUploadResponse>('/files', formData);

    return data;
  }
};
