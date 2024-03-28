'use client';

import 'filepond/dist/filepond.min.css';
import { FilePond, type FilePondProps } from 'react-filepond';
import { twMerge } from 'tailwind-merge';

type UploadInputProps = FilePondProps;

export const UploadInput = ({ className, ...props }: UploadInputProps) => {
  return (
    <FilePond
      labelIdle='Drag & drop your files or <span class="filepond--label-action">browse</span>'
      acceptedFileTypes={['image/*']}
      allowPaste={false}
      allowRevert={false}
      required
      instantUpload={false}
      name="file"
      maxParallelUploads={1}
      allowProcess={false}
      credits={false}
      className={twMerge('!m-0 !font-sans !text-sm', className)}
      {...props}
    />
  );
};
