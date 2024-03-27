import { ok } from 'assert';
import type { FilePondFile } from 'filepond';
import { useState } from 'react';
import toast from 'react-hot-toast';
import type { Address } from 'viem';
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { musharka721ContractABI } from '~common/abis';
import { usePinFile } from './use-pin-file.hook';
import { usePinJSON } from './use-pin-json.hook';

export const useMint = () => {
  const [mintHash, setMintHash] = useState<Address | undefined>();
  const { address } = useAccount();
  const { isSuccess: isSuccessMint, writeContractAsync: mintAsync, isPending: isPendingMint } = useWriteContract();
  const { isSuccess: isSuccessConfirmTransaction, isLoading: isConfirmingTransaction } = useWaitForTransactionReceipt({
    hash: mintHash!,
    query: { enabled: !!mintHash }
  });
  const {
    isSuccess: isSuccessPinFile,
    isPending: isPendingPinFile,
    mutateAsync: pinFileAsync
  } = usePinFile({
    onError: (error) => {
      toast.error(error.message);
    }
  });
  const {
    isSuccess: isSuccessPinJSON,
    isPending: isPendingPinJSON,
    mutateAsync: pinJSONAsync
  } = usePinJSON({
    onError: (error) => {
      toast.error(error.message);
    }
  });
  const isMinting = isPendingPinFile || isPendingPinJSON || isPendingMint;
  const isMinted = isSuccessPinFile || isSuccessPinJSON || isSuccessMint;

  const mint = async (files: FilePondFile[], name: string, description: string) => {
    ok(address, 'Invalid account address');

    const imageURL = await pinFileAsync({ file: files[0].file });
    const tokenURI = await pinJSONAsync({ image: imageURL, name, description });
    const hash = await mintAsync({
      abi: musharka721ContractABI,
      address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
      functionName: 'mint',
      args: [address, tokenURI]
    });

    setMintHash(hash);
  };

  return { mint, isMinting, isMinted, isSuccessConfirmTransaction, isConfirmingTransaction };
};
