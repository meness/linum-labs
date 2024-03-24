import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionProps = Pick<ComponentProps<'section'>, 'children' | 'className'>;
type HeaderProps = Pick<ComponentProps<'div'>, 'children' | 'className'>;

export const Section = ({ className, ...props }: SectionProps) => {
  return (
    <section
      className={twMerge('mx-auto flex flex-col gap-2', className)}
      {...props}
    />
  );
};

export const SectionHeader = ({ className, ...props }: HeaderProps) => {
  return (
    <div
      className={twMerge('flex items-center', className)}
      {...props}
    />
  );
};
