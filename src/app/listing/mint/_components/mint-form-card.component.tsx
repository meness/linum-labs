'use client';

import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Input, Textarea } from '@nextui-org/input';
import { useDisclosure } from '@nextui-org/modal';
import type { FilePondFile } from 'filepond';
import { useRouter } from 'next/navigation';
import { useEffect, useState, type ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import { routeConst } from '~common/consts';
import { ConfirmMintModal, UploadInput } from '~components';
import { useMint } from '~hooks';

type FormState = { name: string; description: string; files: FilePondFile[] };

export const MintFormCard = () => {
  const { push } = useRouter();
  const [{ files, name, description }, setFormState] = useState<FormState>({ name: '', description: '', files: [] });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { isMinting, isMinted, isSuccessConfirmTransaction, mint, isConfirmingTransaction } = useMint();

  const {
    isOpen: isConfirmMintModalOpen,
    onOpen: onConfirmMintModalOpen,
    onOpenChange: onConfirmMintModalOpenChange
  } = useDisclosure();
  const isFormInvalid = !files || !name || !description || isMinting;

  const handleClose = () => {
    if (!isMinting || !isConfirmingTransaction) {
      push(routeConst.listing);
    }
  };

  useEffect(() => {
    // User has to confirm once again if the required fields have changed
    setIsConfirmed(false);
  }, [name, description, files]);

  useEffect(() => {
    if (isMinted || isSuccessConfirmTransaction) {
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
    <>
      <Card
        as="form"
        fullWidth>
        <CardBody className="flex flex-col gap-2">
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
        </CardBody>
        <CardFooter className="gap-2">
          <Button
            type="button"
            isDisabled={isFormInvalid || isMinting || isConfirmingTransaction}
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
        </CardFooter>
      </Card>
      <ConfirmMintModal
        name={name}
        description={description}
        files={files}
        onConfirmClick={handleConfirmMint}
        isOpen={isConfirmMintModalOpen}
        onClose={onConfirmMintModalOpenChange}
      />
    </>
  );
};
