import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  enabled?: boolean;
}

export const useKeyboardNavigation = ({ 
  onPrevious, 
  onNext, 
  enabled = true 
}: UseKeyboardNavigationProps) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          onPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          onNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrevious, onNext, enabled]);
};
