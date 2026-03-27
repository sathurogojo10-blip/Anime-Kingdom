import * as THREE from 'three';

// 1. Scene එකක් හැදීම (ලෝකය)
const scene = new THREE.Scene();

// 2. Camera එකක් හැදීම (අපි බලන කෝණය)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Renderer එක (තිරය මත පින්තූරය ඇඳීම)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. 3D කොටුවක් හැදීම (Box Geometry)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // කොළ පාට
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. Animation (කැරකැවීම)
function animate() {
    requestAnimationFrame(animate);

    // කැරකෙන වේගය
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
