'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ScrollManager() {
  const searchParams = useSearchParams();
  const section = searchParams.get('section')?.toLowerCase();

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  return null; // This component doesn't render anything
}
