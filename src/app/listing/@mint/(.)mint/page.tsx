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
import { useMint } from '~hooks';

type FormState = { name: string; description: string; files: FilePondFile[] };

const NFTModal = () => {
  const { back } = useRouter();
  const [{ files, name, description }, setFormState] = useState<FormState>({ name: '', description: '', files: [] });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { isMinting, isMinted, isSuccessConfirmTransaction, mint, isConfirmingTransaction } = useMint();

  const {
    isOpen: isConfirmMintModalOpen,
    onOpen: onConfirmMintModalOpen,
    onOpenChange: onConfirmMintModalOpenChange
  } = useDisclosure();
  const isFormInValid = !files || !name || !description || isMinting;

  const handleClose = () => {
    if (!isMinting || !isConfirmingTransaction) {
      back();
    }
  };

  useEffect(() => {
    // User has to confirm once again if the required fields have changed
    setIsConfirmed(false);
  }, [name, description, files]);

  useEffect(() => {
    if (isMinted && isSuccessConfirmTransaction) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMinted, isSuccessConfirmTransaction]);

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
        await mint(files, name, description);
      } catch (error) {
        toast.error('Something went wrong');
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
            disabled={isMinting || isConfirmingTransaction}
          />
          <Input
            placeholder="Write a name"
            label="Name"
            autoFocus
            isRequired
            value={name}
            isDisabled={isMinting || isConfirmingTransaction}
            onChange={onNameChange}
          />
          <Textarea
            placeholder="Add more details"
            label="Description"
            value={description}
            isRequired
            isDisabled={isMinting || isConfirmingTransaction}
            onChange={onDescriptionChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            isDisabled={isFormInValid || isMinting || isConfirmingTransaction}
            isLoading={isMinting || isConfirmingTransaction}
            onClick={handleMintClick}
            color="primary">
            {isMinting || isConfirmingTransaction ? 'Minting' : 'Mint'}
          </Button>
          <Button
            type="button"
            color="default"
            variant="ghost"
            isDisabled={isMinting || isConfirmingTransaction}
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
