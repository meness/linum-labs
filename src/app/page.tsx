import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { routeConst } from '~common/consts';
import { Footer, WavyBackground } from '~components';

const RootPage = () => {
  return (
    <WavyBackground className="flex max-w-2xl flex-col items-center gap-4 text-center">
      <h1>Hey there!</h1>
      <p className="mb-6 text-large text-secondary">This app is just another code challenge to showcase my skills.</p>
      <Button
        as={Link}
        variant="shadow"
        color="primary"
        className="mt-2 w-fit"
        size="lg"
        href={routeConst.listing}>
        Go to the app
      </Button>
      <Footer className="absolute bottom-0 start-0" />
    </WavyBackground>
  );
};

export default RootPage;
