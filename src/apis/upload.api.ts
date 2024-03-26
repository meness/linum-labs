import { axiosConfig } from '~configs';
import type { FilesUploadResponse } from '~entities';
import type { FilesUploadDTO } from './dtos';

export const UploadAPI = {
  pinFile: async ({ file }: FilesUploadDTO) => {
    const formData = new FormData();

    formData.append('file', file);

    const { data } = await axiosConfig.post<FilesUploadResponse>('/upload/file', formData);

    return data;
  },

  pinJSON: async (content: Object) => {
    const { data } = await axiosConfig.post<FilesUploadResponse>('/upload/json', content);

    return data;
  }
};
