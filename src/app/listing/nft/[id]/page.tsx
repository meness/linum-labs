import type { Metadata } from 'next';
import { Section, SectionHeader } from '~components';
import { NFTFormCard } from './_components';

const NFTPage = () => {
  return (
    <Section className="h-full max-w-2xl place-content-center">
      <SectionHeader>
        <h1>✍️ NFT</h1>
      </SectionHeader>
      <NFTFormCard />
    </Section>
  );
};

export const metadata: Metadata = {
  title: 'Mint NFT'
};

export default NFTPage;
