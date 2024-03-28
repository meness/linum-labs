'use client';

import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import { Skeleton } from '@nextui-org/skeleton';
import toast from 'react-hot-toast';
import { routeConst } from '~common/consts';
import { replaceIPFSProtocol } from '~helpers';
import { useListing } from '~hooks';

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
        listing.map(({ description, image, name, tokenID }) => {
          return (
            <Card
              className="h-[300px] hover:scale-[1.02] hover:opacity-100 active:scale-100 active:opacity-100"
              as={Link}
              href={`${routeConst.nft}/${tokenID}`}
              aria-label={name}
              key={tokenID}>
              <CardHeader className="absolute top-1 z-10 flex-col !items-start text-tiny font-bold uppercase text-white/60">
                {name}
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 h-full w-full object-cover"
                src={replaceIPFSProtocol(image)}
              />
              <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
                {description}
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
};
