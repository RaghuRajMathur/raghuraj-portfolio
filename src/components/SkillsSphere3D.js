'use client';

import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import styles from '../styles/SkillsSphere3D.module.css';

// Your exact skills data
const skills = {
  'Programming Languages': [ 
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'C++', icon: '/icons/c++.svg' },
    { name: 'C', icon: '/icons/c.svg' }
  ],
  'Frontend': [
    { name: 'HTML5', icon: '/icons/html5.svg' },
    { name: 'CSS3', icon: '/icons/css3.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/npm.svg' },
    { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
    { name: 'Sass', icon: '/icons/sass.svg' }
  ],
  'Backend': [
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'Express', icon: '/icons/express.svg' },
    { name: 'Django', icon: '/icons/django.svg' },
    { name: 'MySQL', icon: '/icons/mysql.svg' }
  ],
  'DevOps & Tools': [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'AWS', icon: '/icons/amazon_s3.svg' },
    { name: 'Linux', icon: '/icons/linux.svg' },
    { name: 'VS Code', icon: '/icons/vscode.svg' }
  ],
  'Cybersecurity': [
    { name: 'Burp Suite', icon: '/icons/burpsuite.svg' },
    { name: 'Metasploit', icon: '/icons/metasploit.svg' },
    { name: 'Kali Linux', icon: '/icons/kalilinuxsvg.svg' },
    { name: 'Wireshark', icon: '/icons/wireshark.svg' },
    { name: 'Nmap', icon: '/icons/nmap.svg' }
  ]
};

// Flatten skills into single array
function getAllSkills() {
  const allSkills = [];
  Object.values(skills).forEach(category => {
    allSkills.push(...category);
  });
  return allSkills;
}

// Perfect Fibonacci Sphere algorithm for even distribution
function fibonacciSphere(samples, radius) {
  const points = [];
  const phi = Math.PI * (Math.sqrt(5) - 1); // Golden angle in radians

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2; // y goes from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y); // radius at y
    const theta = phi * i; // golden angle increment

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    points.push([x * radius, y * radius, z * radius]);
  }

  return points;
}

// Individual skill icon component
function SkillIcon({ position, skill, index }) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Make icon always face camera
      groupRef.current.quaternion.copy(state.camera.quaternion);
      
      // Gentle pulsing animation
      const scale = hovered ? 1.4 : 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.05;
      groupRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Html
        center
        distanceFactor={7}
        zIndexRange={[0, 0]}
        style={{
          transition: 'all 0.2s',
          cursor: 'pointer',
          pointerEvents: 'auto'
        }}
      >
        <div 
          className={styles.iconWrapper}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            title={skill.name}
            className={styles.icon}
          />
        </div>
      </Html>
    </group>
  );
}

// Main rotating sphere component
function RotatingSphere() {
  const groupRef = useRef();
  const allSkills = getAllSkills();
  const radius = 4.5; // Sphere radius
  const positions = fibonacciSphere(allSkills.length, radius);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth continuous rotation
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <>
      {/* Invisible sphere mesh for reference */}
      <mesh visible={false}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial wireframe color="#00d9ff" opacity={0.1} transparent />
      </mesh>

      {/* Icons positioned on sphere */}
      <group ref={groupRef}>
        {allSkills.map((skill, index) => (
          <SkillIcon
            key={skill.name}
            position={positions[index]}
            skill={skill}
            index={index}
          />
        ))}
      </group>
    </>
  );
}

// Loading fallback
function Loader() {
  return (
    <Html center>
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
        <p>Loading Skills Sphere...</p>
      </div>
    </Html>
  );
}

// Main component
export default function SkillsSphere3D() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        camera={{ position: [0, 0, 13], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        {/* Lighting for depth */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <pointLight position={[0, 0, 10]} intensity={0.5} color="#00d9ff" />

        {/* Interactive controls with zoom enabled */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
          minDistance={8}
          maxDistance={20}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />

        {/* 3D Sphere */}
        <Suspense fallback={<Loader />}>
          <RotatingSphere />
        </Suspense>
      </Canvas>

      {/* Accessible fallback list */}
      <ul className={styles.srOnly} aria-label="Technology skills list">
        {getAllSkills().map(skill => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}
