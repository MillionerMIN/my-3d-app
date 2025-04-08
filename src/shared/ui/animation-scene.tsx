'use client';

import { Environment, Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { Points } from './models/points';

export default function AnimationScene() {
	return (
		<>
			<Canvas camera={{ position: [100, 10, 0], fov: 75 }}>
				<Suspense fallback={null}>
					<ambientLight intensity={0.7} />
					<spotLight
						intensity={0.5}
						angle={0.1}
						penumbra={1}
						position={[10, 15, -5]}
						castShadow
					/>
					<Environment preset='night' background blur={0.5} />

					<Points />
				</Suspense>
			</Canvas>
			<Loader />
		</>
	);
}
