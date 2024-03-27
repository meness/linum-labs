import { axiosConfig } from '~configs';
import type { FilesUploadResponse } from '~entities';

export const UploadAPI = {
  pinFile: async (file: Blob) => {
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
