'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/shared/ui/scene'), {
  ssr: false,
  loading: () => <p>Loading 3D...</p>,
});

export default Scene;