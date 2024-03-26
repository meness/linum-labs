import { appConst } from '~common/consts';

export const replaceIPFSProtocol = (text: string) => {
  return text.replace(appConst.ipfsProtocol, 'https://ipfs.io/ipfs/');
};
