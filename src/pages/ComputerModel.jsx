import React from 'react';
import { useGLTF } from '@react-three/drei';

const ComputerModel = (props) => {
  // Load the GLB model
  const { scene } = useGLTF('../src/assets/computer.glb'); // Adjust the path if needed
  return <primitive object={scene} {...props} />;
};

export default ComputerModel;
