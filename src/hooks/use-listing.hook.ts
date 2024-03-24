import axios from 'axios';
import { useEffect, useState } from 'react';
import { parseAbiItem, type Abi, type ContractEventName, type WatchContractEventOnLogsParameter } from 'viem';
import { useWatchContractEvent, type UseWatchContractEventParameters } from 'wagmi';
import { musharka721ContractABI } from '~common/abis';
import { publicClient } from '~configs';
import type { Metadata } from '~entities';
import { replaceIPFS } from '~helpers';

type UseListingProps<
  ABI extends Abi | readonly unknown[] = Abi,
  EventName extends ContractEventName<ABI> = ContractEventName<ABI>,
  Strict extends boolean | undefined = undefined
> = Pick<UseWatchContractEventParameters<ABI, EventName, Strict>, 'onError' | 'onLogs'>;

export const useListing = ({ onLogs, ...props }: UseListingProps<typeof musharka721ContractABI, 'Minted', true>) => {
  const [listing, setListing] = useState<Metadata[]>([]);

  const make = (logs: WatchContractEventOnLogsParameter<typeof musharka721ContractABI, 'Minted', true>) => {
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

  useWatchContractEvent({
    abi: musharka721ContractABI,
    address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
    eventName: 'Minted',
    strict: true,
    // args: {
    //   to: ''
    // },
    onLogs: async (logs) => {
      const metadata = await make(logs);

      setListing((value) => {
        return [...value, ...metadata];
      });

      onLogs?.(logs);
    },
    ...props
  });

  useEffect(() => {
    // Get all listing once
    publicClient
      .getLogs({
        address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
        event: parseAbiItem('event Minted(address to, string tokenURI, uint256 tokenId)'),
        fromBlock: 'earliest',
        toBlock: 'latest',
        strict: true
        // args: {
        //   to: ''
        // }
      })
      .then(async (logs) => {
        const metadata = await make(logs);

        setListing(metadata);
      });
  }, []);

  return listing;
};
