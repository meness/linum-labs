import { useEffect, useState } from 'react';
import { useReadContract } from 'wagmi';
import { musharka721ContractABI } from '~common/abis';
import { useMetadata } from './use-metadata.hook';

export const useNFT = (tokenID: bigint) => {
  const [tokenURI, setTokenURI] = useState('');
  const { isPending: isPendingMetadata, ...rest } = useMetadata(tokenURI);

  const { isPending: isPendingTokenURI, data: readTokenURI } = useReadContract({
    abi: musharka721ContractABI,
    address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
    functionName: 'tokenURI',
    args: [tokenID]
  });

  useEffect(() => {
    if (readTokenURI) {
      // `tokenURI` function adds the base URI prefix, but we don't need it
      setTokenURI(readTokenURI.replace('https://ipfs.io/ipfs/', ''));
    }
  }, [readTokenURI]);

  return { isPending: isPendingMetadata || isPendingTokenURI, ...rest };
};
