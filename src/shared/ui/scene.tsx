'use client';

import {
	ContactShadows,
	Environment,
	Loader,
	OrbitControls
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { AdamHead } from './models/adam-head';
import { F1RedBull } from './models/f1-red-bull';
import { Points } from './models/points';
import { Shoe } from './models/shoe';

export default function Scene() {
	return (
		<>
			<Canvas camera={{ position: [0, 0, 4], fov: 70 }}>
				<Suspense fallback={null}>
					<ambientLight intensity={0.7} />
					<spotLight
						intensity={0.5}
						angle={0.1}
						penumbra={1}
						position={[10, 15, -5]}
						castShadow
					/>
					<Environment preset='city' background blur={0.5} />

					{/* <group>
						<Shoe />
					</group> */}

					<F1RedBull position={[0, -0.5, 0]} />
					{/* <AdamHead position={[4, -0.5, 0]} /> */}

					<ContactShadows
						resolution={512}
						position={[0, -0.6, 0]}
						opacity={1}
						scale={10}
						blur={2}
						far={0.8}
					/>
				</Suspense>
				<OrbitControls />
			</Canvas>
			<Loader />
		</>
	);
}
