import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import type { Metadata } from 'next';
import { routeConst } from '~common/consts';
import { Section, SectionHeader } from '~components';
import { ListingCard } from './_components';

const ListingPage = () => {
  return (
    <Section>
      <SectionHeader>
        <h1 className="grow">🎇 Listing</h1>
        <Button
          as={Link}
          href={routeConst.mint}
          color="primary"
          variant="ghost">
          Mint NFT
        </Button>
      </SectionHeader>
      <ListingCard />
    </Section>
  );
};

export const metadata: Metadata = {
  title: 'Listing'
};

export default ListingPage;
