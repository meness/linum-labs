import { useEffect, useState } from 'react';
import { parseAbiItem, type Abi, type ContractEventName } from 'viem';
import { getLogs } from 'viem/actions';
import { useAccount, useClient, useWatchContractEvent, type UseWatchContractEventParameters } from 'wagmi';
import { musharka721ContractABI } from '~common/abis';
import { wagmiConfig } from '~configs';
import type { Metadata } from '~entities';
import { transformMintedLogsToMetadata } from '~helpers';

const startBlockNumber = 5566136n;

type UseListingProps<
  ABI extends Abi | readonly unknown[] = Abi,
  EventName extends ContractEventName<ABI> = ContractEventName<ABI>,
  Strict extends boolean | undefined = undefined
> = Pick<UseWatchContractEventParameters<ABI, EventName, Strict>, 'onError' | 'onLogs'>;

export const useListing = ({ onLogs, ...props }: UseListingProps<typeof musharka721ContractABI, 'Minted', true>) => {
  const { address } = useAccount();
  const [listing, setListing] = useState<Metadata[]>([]);
  const client = useClient({ config: wagmiConfig });

  useWatchContractEvent({
    abi: musharka721ContractABI,
    address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
    eventName: 'Minted',
    strict: true,
    args: {
      // `to` argument isn't indexed, so filtering by an address doesn't work
      to: address
    },
    onLogs: async (logs) => {
      const metadata = await transformMintedLogsToMetadata(
        logs.filter((log) => {
          return log.args.to === address;
        })
      );

      setListing((value) => {
        return [...value, ...metadata];
      });

      onLogs?.(logs);
    },
    ...props
  });

  useEffect(() => {
    // Get all listing once
    getLogs(client, {
      address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
      event: parseAbiItem('event Minted(address to, string tokenURI, uint256 tokenId)'),
      fromBlock: startBlockNumber,
      toBlock: 'latest',
      strict: true,
      args: {
        // `to` argument isn't indexed, so filtering by an address doesn't work
        to: address
      }
    }).then(async (logs) => {
      const metadata = await transformMintedLogsToMetadata(
        logs.filter((log) => {
          return log.args.to === address;
        })
      );

      setListing(metadata);
    });
  }, [address, client]);

  return listing;
};
