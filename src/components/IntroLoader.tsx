import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { animate } from 'animejs';

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    const leaves: THREE.Mesh[] = [];
    const leafGeometry = new THREE.PlaneGeometry(0.15, 0.2);

    const leafTexture = new THREE.TextureLoader().load('data:image/svg+xml;base64,' +
      btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(34, 139, 34, 0.6)">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.67-2C7.5 17.5 9 14 12 14c2.5 0 4.5 2 4.5 4.5 0 1.25-.5 2.45-1.5 3.5l1.5 1.5C18 21.5 18.5 19.75 18.5 18c0-3.5-3-6.5-6.5-6.5c-1.75 0-3.25.75-4.5 2c.75-3.5 2.5-6.5 6.5-8c2.5-.75 5.5-.5 8 .5l.5-2C19.5 2.5 16 2 13 3c-5 1.5-8 6-9 11.5C4.5 17 5 20 7 22l1.5-1.5C7 18.5 7 16 9 14c1.5-1.5 3.5-2 5.5-2 2.5 0 4.5 2 4.5 4.5 0 1.5-.75 3-2 4l1.5 1.5c1.75-1.5 2.5-3.5 2.5-5.5C21 12.5 19 9.5 15.5 8.5z"/>
      </svg>`));

    const leafMaterial = new THREE.MeshBasicMaterial({
      map: leafTexture,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < 25; i++) {
      const leaf = new THREE.Mesh(leafGeometry, leafMaterial.clone());
      leaf.position.x = Math.random() * 12 - 6;
      leaf.position.y = Math.random() * 10 + 5;
      leaf.position.z = Math.random() * 3 - 1;
      leaf.rotation.z = Math.random() * Math.PI;

      leaf.userData = {
        speed: 0.01 + Math.random() * 0.02,
        rotationSpeed: 0.01 + Math.random() * 0.02,
        swayAmount: 0.5 + Math.random() * 0.5,
        swaySpeed: 0.5 + Math.random() * 1.5,
      };

      leaves.push(leaf);
      scene.add(leaf);
    }

    function animateThree() {
      requestAnimationFrame(animateThree);

      leaves.forEach((leaf) => {
        leaf.position.y -= leaf.userData.speed;
        leaf.rotation.z += leaf.userData.rotationSpeed;
        leaf.position.x += Math.sin(Date.now() * 0.001 * leaf.userData.swaySpeed) * 0.002 * leaf.userData.swayAmount;

        if (leaf.position.y < -5) {
          leaf.position.y = 8;
          leaf.position.x = Math.random() * 12 - 6;
        }
      });

      renderer.render(scene, camera);
    }

    animateThree();

    if (logoRef.current) {
      animate(logoRef.current, {
        scale: { to: 1, from: 0.6 },
        opacity: { to: 1, from: 0 },
        duration: 800,
        ease: 'out-cubic',
        delay: 200,
      });
    }

    const timer = setTimeout(() => {
      const container = document.getElementById('intro-loader');
      if (container) {
        animate(container, {
          opacity: { to: 0, from: 1 },
          duration: 500,
          ease: 'out-cubic',
          onComplete: () => {
            onComplete();
          },
        });
      }
    }, 3500);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      leaves.forEach(leaf => {
        leaf.geometry.dispose();
        (leaf.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, [onComplete]);

  return (
    <div
      id="intro-loader"
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      <img
        ref={logoRef}
        src="/unicore-logo.png"
        alt="UNICORE"
        className="relative z-10 w-96 max-w-[80vw] h-auto object-contain"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))' }}
      />
    </div>
  );
}
