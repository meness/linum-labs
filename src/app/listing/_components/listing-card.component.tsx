'use client';

import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import toast from 'react-hot-toast';
import { replaceIPFSProtocol } from '~helpers';
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
      {listing.map(({ description, image, name, tokenID }) => {
        return (
          <Card
            key={tokenID}
            className="col-span-12 h-[300px] sm:col-span-4">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <p className="text-tiny font-bold uppercase text-white/60">{name}</p>
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
