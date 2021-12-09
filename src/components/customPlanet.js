import { useTexture } from "@react-three/drei";

const CustomPlanet = ({ name }) => {
  const marsTexture = useTexture(`assets/img/planets/${name}.jpeg`);

  return (
    <>
      {/* <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 5]} /> */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.1, 32, 16]} />
        <meshStandardMaterial map={marsTexture} />
      </mesh>
    </>
  );
};

export default CustomPlanet;
