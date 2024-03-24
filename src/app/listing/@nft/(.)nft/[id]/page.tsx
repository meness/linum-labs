'use client';

import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import 'filepond/dist/filepond.min.css';
import { useRouter } from 'next/navigation';

const NFTModal = () => {
  const { back } = useRouter();

  const handleClose = () => {
    back();
  };

  return (
    <Modal
      defaultOpen
      size="lg"
      backdrop="blur"
      onClose={handleClose}>
      <ModalContent as="form">
        <ModalHeader>🎇 Mint NFT</ModalHeader>
        <ModalBody className="flex flex-col gap-2">
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
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            color="default"
            fullWidth
            variant="ghost"
            onClick={handleClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NFTModal;
