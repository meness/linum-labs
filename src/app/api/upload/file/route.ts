import axios from 'axios';
import { appConst } from '~common/consts';
import type { PinataPinResponse } from '~entities';

export const POST = async (request: Request) => {
  const requestFormData = await request.formData();

  if (requestFormData.has('file')) {
    requestFormData.append('pinataMetadata', JSON.stringify({ name: `${Date.now()}.json` }));

    const response = await axios.post<PinataPinResponse>(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      requestFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${process.env.PINATA_JWT}`
        }
      }
    );

    return Response.json(appConst.ipfsProtocol + response.data.IpfsHash);
  }

  return Response.error();
};
