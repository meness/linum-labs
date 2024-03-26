import type { Metadata } from 'next';
import { Section, SectionHeader } from '~components';
import { NFTCard } from './_components';

const NFTPage = () => {
  return (
    <Section className="h-full max-w-2xl place-content-center">
      <SectionHeader>
        <h1>🎇 Overview</h1>
      </SectionHeader>
      <NFTCard />
    </Section>
  );
};

export const metadata: Metadata = {
  title: 'Mint NFT'
};

export default NFTPage;
