import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

export const useFullscreen = <RefType extends HTMLElement>() => {
  const [isInFullscreenMode, setIsInFullscreenMode] = useState(false);
  const fullscreenRef = useRef<RefType>(null);

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        setIsInFullscreenMode(false);
      } else if (document.fullscreenElement) {
        setIsInFullscreenMode(true);
      }
    });
  }, []);

  const handleFullscreen = () => {
    if (document.fullscreenEnabled) {
      if (!document.fullscreenElement) {
        fullscreenRef.current?.requestFullscreen();
      } else if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    } else {
      toast.error('Fullscreen mode is disabled');
    }
  };

  return { isInFullscreenMode, fullscreenRef, handleFullscreen };
};
