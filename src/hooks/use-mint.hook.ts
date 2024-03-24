import { ok } from 'assert';
import { useAccount, useWriteContract } from 'wagmi';
import { musharka721ContractABI } from '~common/abis';

export const useMint = () => {
  const { writeContractAsync, ...rest } = useWriteContract();
  const { address } = useAccount();

  const mint = (imageURL: string, name: string, description: string) => {
    ok(address, 'Invalid account address');

    return writeContractAsync({
      abi: musharka721ContractABI,
      address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
      functionName: 'mint',
      args: [address, JSON.stringify({ image: imageURL, name, description })]
    });
  };

  return { mint, ...rest };
};
