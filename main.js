import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

let timer = 0;

function animate() {
    requestAnimationFrame(animate);
    if (timer > 0 && timer < 10) {

        timer += 1;
    } else {

    }
    cube.position.x = -1;
    //cube.rotation.x += 0.1;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}
animate();