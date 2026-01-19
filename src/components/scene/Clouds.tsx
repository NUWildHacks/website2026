import CloudGroup from './CloudGroup';

const Clouds = () => {
  return (
    <group>
      <CloudGroup count={50} scale={4} yRange={3} speedFactor={10} />
      <CloudGroup count={50} scale={2} yRange={2} speedFactor={8} />
    </group>
  );
};

export default Clouds;
