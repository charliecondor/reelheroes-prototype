import * as THREE from 'three';

// scene, camera, renderer initialization

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);



// event handlers

document.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.key === 'Spacebar') {
        console.log('Spacebar');
        
    }
})






const geometry = new THREE.BoxGeometry(0.75, 0.75, 0.75);

//const material = new THREE.MeshBasicMaterial( { color: 0x00fff0 } );
const material = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Green
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Yellow
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Magenta
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })  // Cyan
];

let cubes = [];
let index = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        cubes[index] = new THREE.Mesh(geometry, material);
        cubes[index].position.x = i;
        cubes[index].position.y = j;
        
        //console.log(i, j);
        
        scene.add(cubes[index]);
        index++;
    }
}

camera.position.z = 5;

let timer = 0;
let direction = true;

function rotateRandom(cubes) {
    for (let i = 0; i < cubes.length; i++) {        
        let random = Math.floor(Math.random() * 4);
        switch (random) {
            case 0:
                cubes[i].rotation.x = 0.1;
                break;
            case 1:
                cubes[i].rotation.x = 0.1;
                break;
            case 2:
                cubes[i].rotation.y = 0.1;
                break;
            case 3:
                cubes[i].rotation.y = 0.1;
                break;
        }
        console.log(i);
    }
}


// Render loop below

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    renderer.render(scene, camera);
}

animate();