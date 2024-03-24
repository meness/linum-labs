'use client';

import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal';
import type { FilePondFile } from 'filepond';
import 'filepond/dist/filepond.min.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState, type ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import { ConfirmMintModal, UploadInput } from '~components';
import { useMint, useUpload } from '~hooks';

type FormState = { name: string; description: string; files: FilePondFile[] };

const NFTModal = () => {
  const { back } = useRouter();
  const [{ files, name, description }, setFormState] = useState<FormState>({ name: '', description: '', files: [] });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const { mint } = useMint();
  const { mutateAsync } = useUpload({
    onError: (error) => {
      toast.error(error.message);
    }
  });
  const {
    isOpen: isConfirmMintModalOpen,
    onOpen: onConfirmMintModalOpen,
    onOpenChange: onConfirmMintModalOpenChange
  } = useDisclosure();
  const isFormDisabled = !files || !name || !description || isMinting;

  const handleClose = () => {
    if (!isMinting) {
      back();
    }
  };

  useEffect(() => {
    // User has to confirm once again if the required fields have changed
    setIsConfirmed(false);
  }, [name, description, files]);

  const handleFormStateChange = <T extends keyof FormState>(field: T, changedValue: FormState[T]) => {
    setFormState((value) => {
      return { ...value, [field]: changedValue };
    });
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFormStateChange('name', e.target.value);
  };

  const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFormStateChange('description', e.target.value);
  };

  const onFilesChange = (changedFiles: FilePondFile[]) => {
    handleFormStateChange('files', changedFiles);
  };

  const handleConfirmMint = () => {
    setIsConfirmed(true);
  };

  const handleMintClick = async () => {
    if (isConfirmed) {
      try {
        setIsMinting(true);

        const imageURL = await mutateAsync({ file: files[0].file });
        const hash = await mint(imageURL, name, description);
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        setIsMinting(false);
      }
    } else {
      onConfirmMintModalOpen();
    }
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
          <UploadInput
            onupdatefiles={(addedFile) => {
              onFilesChange(addedFile);
            }}
            onerror={(addedFileError) => {
              toast.error(addedFileError.body);
            }}
          />
          <Input
            placeholder="Write a name"
            label="Name"
            autoFocus
            isRequired
            value={name}
            onChange={onNameChange}
          />
          <Textarea
            placeholder="Add more details"
            label="Description"
            value={description}
            isRequired
            onChange={onDescriptionChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            isDisabled={isFormDisabled}
            isLoading={isMinting}
            onClick={handleMintClick}
            color="primary">
            {isMinting ? 'Minting' : 'Mint'}
          </Button>
          <Button
            type="button"
            color="default"
            variant="ghost"
            isDisabled={isMinting}
            onClick={handleClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
      <ConfirmMintModal
        name={name}
        description={description}
        files={files}
        onConfirmClick={handleConfirmMint}
        isOpen={isConfirmMintModalOpen}
        onClose={onConfirmMintModalOpenChange}
      />
    </Modal>
  );
};

export default NFTModal;
