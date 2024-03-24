'use client';

import { Avatar } from '@nextui-org/avatar';
import { Button, type ButtonProps } from '@nextui-org/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';

type WalletButtonProps = ButtonProps;

export const WalletButton = (props: WalletButtonProps) => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        const isReady = mounted && authenticationStatus !== 'loading';
        const isConnected =
          isReady && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            {...(!isReady && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}>
            {(() => {
              if (!isConnected) {
                return (
                  <Button
                    color="primary"
                    onClick={openConnectModal}
                    type="button"
                    {...props}>
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    color="warning"
                    onClick={openChainModal}
                    type="button"
                    {...props}>
                    Change network
                  </Button>
                );
              }

              return (
                <Avatar
                  as={Button}
                  onClick={openAccountModal}
                  radius="full"
                  color="primary"
                  type="button"
                  isIconOnly
                  isBordered
                  src={`https://i.pravatar.cc/64?u=${account.address}`}
                />
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
