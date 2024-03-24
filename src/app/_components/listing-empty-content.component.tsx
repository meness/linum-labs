import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { routeConst } from '~common/consts';

export const ListingEmptyContent = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-large font-medium">You haven&apos;t added any NFTs yet.</p>
      <Button
        as={Link}
        href={routeConst.mint}
        color="primary"
        className="w-fit font-bold"
        size="lg"
        variant="shadow">
        Mint First NFT
      </Button>
    </div>
  );
};
