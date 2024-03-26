import axios from 'axios';
import { appConst } from '~common/consts';
import type { PinataPinResponse } from '~entities';

export const POST = async (request: Request) => {
  const requestContent = await request.json();

  const content = JSON.stringify({ pinataContent: requestContent, pinataMetadata: { name: `${Date.now()}.json` } });
  const response = await axios.post<PinataPinResponse>('https://api.pinata.cloud/pinning/pinJSONToIPFS', content, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.PINATA_JWT}`
    }
  });

  return Response.json(appConst.ipfsProtocol + response.data.IpfsHash);
};
