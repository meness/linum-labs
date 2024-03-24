'use client';

import { Button } from '@nextui-org/button';
import { useEffect } from 'react';

type GlobalErrorProps = { error: Error & { digest?: string }; reset: () => void };

export const Error = ({ error, reset }: GlobalErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
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
    </div>
  );
};

export default Error;
