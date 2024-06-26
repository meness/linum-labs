'use client';

import { Button } from '@nextui-org/button';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Skeleton } from '@nextui-org/skeleton';
import 'filepond/dist/filepond.min.css';
import { useParams, useRouter } from 'next/navigation';
import { replaceIPFSProtocol } from '~helpers';
import { useFullscreen, useNFT } from '~hooks';

const NFTModal = () => {
  const { id: nftID } = useParams<{ id: string }>();
  const { back } = useRouter();
  const { nft, isPending: isPendingNFT } = useNFT(BigInt(nftID));
  const { fullscreenRef, handleFullscreen } = useFullscreen<HTMLImageElement>();

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
        <ModalHeader>🎇 Overview</ModalHeader>
        <ModalBody className="flex flex-col gap-2">
          {isPendingNFT && (
            <Skeleton className="col-span-12 h-[300px] rounded-[var(--nextui-radius-large)] sm:col-span-4" />
          )}
          {!isPendingNFT && nft && (
            <button
              type="button"
              aria-label="See this NFT in the fullscreen mode"
              onClick={handleFullscreen}>
              <Card className="col-span-12 h-[300px] hover:scale-[1.01] active:scale-100 sm:col-span-4">
                <CardHeader className="absolute top-1 z-10 flex-col !items-start">
                  <p className="text-tiny font-bold uppercase text-white/60">{nft.name}</p>
                </CardHeader>
                <Image
                  src={replaceIPFSProtocol(nft.image)}
                  removeWrapper
                  alt="NFT"
                  className="z-0 h-full w-full object-cover"
                  ref={fullscreenRef}
                />
                <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
                  {nft.description}
                </CardFooter>
              </Card>
            </button>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            color="default"
            fullWidth
            variant="ghost"
            isDisabled={isPendingNFT}
            onClick={handleClose}>
            Looks good
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NFTModal;
