'use client';

import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import toast from 'react-hot-toast';
import { routeConst } from '~common/consts';
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
    <div className="grid grid-flow-row gap-4 md:grid-cols-3">
      {listing.map(({ description, image, name, tokenID }) => {
        return (
          <Card
            className="h-[300px]"
            as={Link}
            href={`${routeConst.nft}/${tokenID}`}
            aria-label={name}
            key={tokenID}>
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
