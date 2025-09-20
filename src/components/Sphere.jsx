import React from "react";
export default function Sphere() {
	return (
		<>
			<sphereGeometry args={[2, 32, 16]} />
			<meshStandardMaterial />
		</>
	);
}
