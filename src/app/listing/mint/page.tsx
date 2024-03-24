import type { Metadata } from 'next';
import { Section, SectionHeader } from '~components';
import { MintFormCard } from './_components';

const MintPage = () => {
  return (
    <Section className="h-full max-w-2xl place-content-center">
      <SectionHeader>
        <h1>✍️ Mint</h1>
      </SectionHeader>
      <MintFormCard />
    </Section>
  );
};

export const metadata: Metadata = {
  title: 'Mint NFT'
};

export default MintPage;
