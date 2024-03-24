import { FingerPrintIcon } from '@heroicons/react/24/outline';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type FooterProps = Pick<ComponentProps<'footer'>, 'className'>;

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={twMerge(
        'mb-4 ms-4 flex select-none items-center gap-2 text-large font-semibold text-foreground/20',
        className
      )}>
      <FingerPrintIcon className="h-9 w-9" /> Designed by Alex Eskandari
    </footer>
  );
};
