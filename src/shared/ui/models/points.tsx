import { useLoader } from '@react-three/fiber';
import { JSX, useCallback, useMemo } from 'react';
import * as THREE from 'three';

export function Points(props: JSX.IntrinsicElements['group']) {
	const imgTex = useLoader(THREE.TextureLoader, '/assets/textures/circle.png');

	const count = 100;
	const sep = 3;

	const t = 0;
	const f = 0.002,
		a = 3;

	const graph = useCallback(
		(x: number, z: number) => {
			return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
		},
		[t, f, a]
	);

	const positions = useMemo(() => {
		const positions = [];

		for (let xi = 0; xi < count; xi++) {
			for (let zi = 0; zi < count; zi++) {
				const x = sep * (xi - count / 2);
				const z = sep * (zi - count / 2);
				const y = graph(x, z);
				positions.push(x, y, z);
			}
		}
		return new Float32Array(positions);
	}, [count, sep, graph]);

	return (
		<points>
			<bufferGeometry attach='geometry'>
				<bufferAttribute
					attach={['attributes', 'positions']}
					args={[positions, 3]}
					itemSize={3}
				/>
			</bufferGeometry>
			<pointsMaterial
				attach='material'
				map={imgTex}
				color={0x00ab55}
				size={0.5}
				sizeAttenuation
				transparent={false}
				opacity={1.0}
			/>
		</points>
	);
}
