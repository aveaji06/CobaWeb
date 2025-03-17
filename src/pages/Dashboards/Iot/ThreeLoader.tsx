import React, { useEffect, useRef} from 'react';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const SimpleObjMtlLoader = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const mtlLoader = new MTLLoader();
        mtlLoader.load('/src/assets/three/building.mtl', (materials) => {
            materials.preload();

            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load('/src/assets/three/building.obj', (object) => {
                scene.add(object);
                animate();
            });
        });

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        // @ts-ignore
        ref.current.appendChild(renderer.domElement);
    }, []);

    return <div ref={ref} />;
};

export default SimpleObjMtlLoader;
