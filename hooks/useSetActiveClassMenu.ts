import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function useSetActiveClassMenu(isActive: boolean, id: string) {
  useEffect(() => {
    const element = document.querySelector(
      `.header-bottom-link[data-section-id="${id}"]`
    );
    if (isActive) {
      element?.classList.add('active');
    } else {
      element?.classList.remove('active');
    }
  }, [isActive]);
}
