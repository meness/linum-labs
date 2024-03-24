'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useSwitch } from '@nextui-org/switch';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { Component, slots, getBaseProps, getInputProps, getWrapperProps } = useSwitch({
    onValueChange: (selected) => {
      setTheme(selected ? 'light' : 'dark');
    },
    isSelected: resolvedTheme === 'light'
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: ['h-8 w-8', 'flex items-center justify-center', 'rounded-full bg-default-100 hover:bg-default-200']
        })}>
        {resolvedTheme === 'light' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </div>
    </Component>
  );
};
