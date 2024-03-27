'use client';

import { Button } from '@nextui-org/button';
import { useEffect } from 'react';
import { appConfig } from '~configs';

type GlobalErrorProps = { error: Error & { digest?: string }; reset: () => void };

export const GlobalError = ({ error, reset }: GlobalErrorProps) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <html
      lang={appConfig.defaultLocale}
      dir="ltr">
      <body>
        <h2>Something went wrong!</h2>
        <Button
          color="primary"
          variant="shadow"
          size="lg"
          className="font-bold"
          type="button"
          onClick={() => {
            return reset();
          }}>
          Try again
        </Button>
      </body>
    </html>
  );
};

export default GlobalError;
