import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ComputerModel from './ComputerModel'; // Reusable model component

const TestComputerModel = () => {
  return (
    <div class="sketchfab-embed-wrapper">
  <iframe 
    frameborder="0" 
    allowfullscreen 
    mozallowfullscreen="true" 
    webkitallowfullscreen="true" 
    allow="autoplay; fullscreen; xr-spatial-tracking" 
    xr-spatial-tracking 
    execution-while-out-of-viewport 
    execution-while-not-rendered 
    web-share 
    src="https://sketchfab.com/models/bd6fb0ed93f3475b890a099fedecf351/embed?autospin=0.2&transparent=1&ui_controls=0&ui_hint=0&fullscreen=0">
  </iframe>
</div>
  );
};

export default TestComputerModel;
