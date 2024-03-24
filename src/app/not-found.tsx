import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { routeConst } from '~common/consts';
import { GradientBackground } from '~components';
import { FullHeightLayout } from '~layouts';

const GlobalNotFound = () => {
  return (
    <GradientBackground>
      <FullHeightLayout
        hideHeader
        wrapperClassName="absolute inset-0 z-50 text-white"
        className="flex !max-w-2xl flex-col place-content-center place-items-center gap-4 text-center">
        <h1>Page not found</h1>
        <p className="mb-6 text-large text-secondary">
          The page you are looking for might have been removed, have it&apos;s name changed, or is temporarily
          unavailable.
        </p>
        <Button
          variant="shadow"
          color="primary"
          as={Link}
          href={routeConst.listing}
          size="lg"
          className="font-bold">
          Go to the app
        </Button>
      </FullHeightLayout>
    </GradientBackground>
  );
};

export default GlobalNotFound;
