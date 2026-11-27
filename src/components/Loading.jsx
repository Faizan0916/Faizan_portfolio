// import { Html, useProgress } from '@react-three/drei';

// const CanvasLoader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html
//       as="div"
//       center
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//       }}>
//       <span className="canvas-loader"></span>
//       <p
//         style={{
//           fontSize: 14,
//           color: '#F1F1F1',
//           fontWeight: 800,
//           marginTop: 40,
//         }}>
//         {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
//       </p>
//     </Html>
//   );
// };

// export default CanvasLoader;

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const CanvasLoader = () => {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 1.2;
      ref.current.rotation.y += delta * 2;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#ff7a1a" wireframe />
    </mesh>
  );
};

export default CanvasLoader;