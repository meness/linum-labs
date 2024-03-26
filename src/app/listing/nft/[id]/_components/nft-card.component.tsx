'use client';

import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Skeleton } from '@nextui-org/skeleton';
import 'filepond/dist/filepond.min.css';
import { useParams, useRouter } from 'next/navigation';
import { routeConst } from '~common/consts';
import { replaceIPFSProtocol } from '~helpers';
import { useNFT } from '~hooks';

export const NFTCard = () => {
  const { push } = useRouter();
  const { id: nftID } = useParams<{ id: string }>();
  const { data: nft, isPending: isPendingNFT } = useNFT(BigInt(nftID));

  const handleCancelClick = () => {
    push(routeConst.listing);
  };

  return (
    <Card
      as="form"
      fullWidth>
      <CardBody className="flex flex-col gap-2">
        <Card className="col-span-12 h-[300px] sm:col-span-4">
          <Card className="col-span-12 h-[300px] sm:col-span-4">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <Skeleton
                isLoaded={!isPendingNFT}
                className="text-tiny font-bold uppercase text-white/60">
                <p className="text-tiny font-bold uppercase text-white/60">{nft?.name}</p>
              </Skeleton>
            </CardHeader>
            <Skeleton
              className="z-0 h-full w-full object-cover"
              isLoaded={!isPendingNFT}>
              <Image
                src={replaceIPFSProtocol(nft?.image ?? '')}
                removeWrapper
                alt="NFT"
                className="z-0 h-full w-full object-cover"
              />
            </Skeleton>

            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
              <Skeleton isLoaded={!isPendingNFT}>{nft?.description}</Skeleton>
            </CardFooter>
          </Card>
        </Card>
      </CardBody>
      <CardFooter>
        <Button
          type="button"
          color="default"
          fullWidth
          variant="ghost"
          onClick={handleCancelClick}>
          Cool
        </Button>
      </CardFooter>
    </Card>
  );
};
