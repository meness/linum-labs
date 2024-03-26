import axiosOrg from 'axios';
import type { Metadata } from '~entities';
import { replaceIPFSProtocol } from '~helpers';

export const MetadataAPI = {
  getMetadata: async (tokenURI: string) => {
    const { data } = await axiosOrg.get<Omit<Metadata, 'tokenID'>>(replaceIPFSProtocol(tokenURI));

    return data;
  }
};
