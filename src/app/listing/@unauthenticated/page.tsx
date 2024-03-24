import { WalletButton } from '~components';

export const UnauthenticatedDefault = () => {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col place-content-center place-items-center gap-4 text-center">
      <h1>Your&apos;re not connected</h1>
      <p className="mb-6 text-secondary">Please click the button to connect your wallet.</p>
      <WalletButton
        variant="shadow"
        size="lg"
        className="font-bold"
      />
    </div>
  );
};

export default UnauthenticatedDefault;
