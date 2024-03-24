import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { Footer, Header } from '~components';

type FullHeightLayoutProps = PropsWithChildren<{ hideHeader?: boolean; wrapperClassName?: string; className?: string }>;

export const FullHeightLayout = ({ className, hideHeader, wrapperClassName, children }: FullHeightLayoutProps) => {
  return (
    <div
      className={twMerge(
        'grid h-screen grid-rows-[auto_1fr_auto]',
        hideHeader ? 'grid-rows-[1fr_auto]' : 'grid-rows-[auto_1fr_auto]',
        wrapperClassName
      )}>
      {!hideHeader && <Header />}
      <main className={twMerge('container mx-auto max-w-7xl px-6 py-16', className)}>{children}</main>
      <Footer />
    </div>
  );
};
