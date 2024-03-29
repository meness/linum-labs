import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import { routeConst } from '~common/consts';
import type { Metadata } from '~entities';
import { replaceIPFSProtocol } from '~helpers';

type ListingCardProps = { nft: Metadata };

export const ListingCard = ({ nft: { description, image, name, tokenID } }: ListingCardProps) => {
  return (
    <Card
      className="h-[300px] hover:scale-[1.02] hover:opacity-100 active:scale-100 active:opacity-100"
      as={Link}
      href={`${routeConst.nft}/${tokenID}`}
      aria-label={name}>
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
};
