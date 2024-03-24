import axios from 'axios';
import type { WatchContractEventOnLogsParameter } from 'viem';
import type { musharka721ContractABI } from '~common/abis';
import type { Metadata } from '~entities';
import { replaceIPFS } from './string.helper';

export const transformMintedLogsToMetadata = (
  logs: WatchContractEventOnLogsParameter<typeof musharka721ContractABI, 'Minted', true>
): Promise<Metadata[]> => {
  return Promise.all(
    logs.map<Promise<Metadata>>(async ({ args: { tokenId, tokenURI } }) => {
      const metadataURL = replaceIPFS(tokenURI);

      const {
        data: { description, image, name }
      } = await axios.get<Omit<Metadata, 'tokenID'>>(metadataURL);

      return { tokenID: tokenId, description, image, name };
    })
  );
};
