import { Button } from '@nextui-org/button';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, type ModalProps } from '@nextui-org/modal';
import type { FilePondFile } from 'filepond';
import type { DispatchWithoutAction } from 'react';

type ConfirmMintModalProps = Omit<ModalProps, 'children' | 'backdrop'> & {
  name: string;
  description: string;
  onConfirmClick: DispatchWithoutAction;
  files: FilePondFile[];
};

export const ConfirmMintModal = ({ name, files, description, onConfirmClick, ...props }: ConfirmMintModalProps) => {
  const handleConfirmClick = () => {
    onConfirmClick();
    props.onClose?.();
  };

  return (
    <Modal
      backdrop="blur"
      {...props}>
      <ModalContent>
        {(onClose) => {
          return (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirm NFT</ModalHeader>
              <ModalBody className="flex flex-col gap-1">
                <Card className="col-span-12 h-[300px] sm:col-span-4">
                  <CardHeader className="absolute top-1 z-10 flex-col !items-start text-tiny font-bold uppercase text-white/60">
                    {name}
                  </CardHeader>
                  {files.map((file) => {
                    return (
                      <Image
                        key={file.id}
                        src={URL.createObjectURL(file.file)}
                        removeWrapper
                        alt="NFT"
                        className="z-0 h-full w-full object-cover"
                      />
                    );
                  })}
                  <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
                    {description}
                  </CardFooter>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="default"
                  variant="ghost"
                  onPress={onClose}
                  fullWidth>
                  Back
                </Button>
                <Button
                  color="success"
                  onClick={handleConfirmClick}
                  fullWidth>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          );
        }}
      </ModalContent>
    </Modal>
  );
};
