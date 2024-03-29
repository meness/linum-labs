'use client';

import { Skeleton } from '@nextui-org/skeleton';
import toast from 'react-hot-toast';
import { useListing } from '~hooks';
import { ListingCard } from './listing-card.component';

export const ListingCards = () => {
  const { listing, isLoadingListing } = useListing({
    onLogs: () => {
      toast.success('A new NFT has been added to your listing');
    },
    onError: () => {
      toast.error('Something went wrong');
    }
  });

  return (
    <div className="grid grid-flow-row gap-4 md:grid-cols-3">
      {isLoadingListing &&
        new Array(6).fill(1).map((_, index) => {
          return (
            <Skeleton
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="h-[300px] rounded-[var(--nextui-radius-large)] transition-transform hover:scale-[1.02] hover:opacity-100 active:scale-100 active:opacity-100"
            />
          );
        })}
      {!isLoadingListing &&
        listing.map((nft) => {
          return (
            <ListingCard
              key={nft.tokenID}
              nft={nft}
            />
          );
        })}
    </div>
  );
};
