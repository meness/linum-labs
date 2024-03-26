import { ok } from 'assert';
import type { FilePondFile } from 'filepond';
import { useState } from 'react';
import toast from 'react-hot-toast';
import type { Address } from 'viem';
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { musharka721ContractABI } from '~common/abis';
import { useUploadFile } from './use-upload-file.hook';
import { useUploadJSON } from './use-upload-json.hook';

export const useMint = () => {
  const [mintHash, setMintHash] = useState<Address | undefined>();
  const { address } = useAccount();
  const { isSuccess: isSuccessMint, writeContractAsync: mintAsync, isPending: isPendingMint } = useWriteContract();
  const { isSuccess: isSuccessConfirmTransaction, isLoading: isConfirmingTransaction } = useWaitForTransactionReceipt({
    hash: mintHash!,
    query: { enabled: !!mintHash }
  });
  const {
    isSuccess: isSuccessUploadFile,
    isPending: isPendingUploadFile,
    mutateAsync: uploadFileAsync
  } = useUploadFile({
    onError: (error) => {
      toast.error(error.message);
    }
  });
  const {
    isSuccess: isSuccessUploadJSON,
    isPending: isPendingUploadJSON,
    mutateAsync: uploadJSONAsync
  } = useUploadJSON({
    onError: (error) => {
      toast.error(error.message);
    }
  });
  const isMinting = isPendingUploadFile || isPendingUploadJSON || isPendingMint;
  const isMinted = isSuccessUploadFile || isSuccessUploadJSON || isSuccessMint;

  const mint = async (files: FilePondFile[], name: string, description: string) => {
    ok(address, 'Invalid account address');

    const imageURL = await uploadFileAsync({ file: files[0].file });
    const tokenURI = await uploadJSONAsync({ image: imageURL, name, description });
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
