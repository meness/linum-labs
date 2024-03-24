'use client';

import { Card, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import toast from 'react-hot-toast';
import { replaceIPFS } from '~helpers';
import { useListing } from '~hooks';

export const ListingCard = () => {
  const listing = useListing({
    onLogs: () => {
      toast.success('A new NFT has been added to your listing');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  return (
    <div className="grid grid-flow-row md:grid-cols-3">
      {listing.map((metadata) => {
        return (
          <Card
            key={metadata.tokenID}
            className="col-span-12 h-[300px] sm:col-span-4">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <p className="text-tiny font-bold uppercase text-white/60">NFT Name</p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src={replaceIPFS(metadata.image)}
            />
          </Card>
        );
      })}
    </div>
  );
};
