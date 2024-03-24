'use client';

import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { useRouter } from 'next/navigation';
import { routeConst } from '~common/consts';

export const NFTFormCard = () => {
  const { push } = useRouter();

  const handleCancelClick = () => {
    push(routeConst.listing);
  };

  return (
    <Card
      as="form"
      fullWidth>
      <CardBody className="flex flex-col gap-2">
        <Card className="col-span-12 h-[300px] sm:col-span-4">
          {/* <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <p className="text-tiny font-bold uppercase text-white/60">{name}</p>
            </CardHeader> */}
          {/* <Image
              key={file.id}
              src={URL.createObjectURL(file.file)}
              removeWrapper
              alt="NFT"
              className="z-0 h-full w-full object-cover"
            /> */}
          {/* <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
              {description}
            </CardFooter> */}
        </Card>
      </CardBody>
      <CardFooter>
        <Button
          type="button"
          color="default"
          variant="ghost"
          onClick={handleCancelClick}>
          Cancel
        </Button>
      </CardFooter>
    </Card>
  );
};
