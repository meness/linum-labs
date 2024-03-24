import axios from 'axios';
import type { PinataPinResponse } from '~entities';

export const POST = async (request: Request) => {
  const requestFormData = await request.formData();
  const file = requestFormData.get('file');

  if (file) {
    const formData = new FormData();

    formData.append('file', file);

    const response = await axios.post<PinataPinResponse>('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
      headers: {
        Authorization: `Bearer ${process.env.PINATA_JWT}`
      }
    });

    return Response.json(process.env.PINATA_GATEWAY_URL + response.data.IpfsHash);
  }

  return Response.error();
};
