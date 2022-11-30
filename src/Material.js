import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// 材质

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 60;
const geometry = new THREE.SphereGeometry(15, 32, 16); // 球体 半径、水平分段数、垂直分段数
// 点材质
const material = new THREE.MeshBasicMaterial({
  color: 0x00BFFF,
});
const mesh = new THREE.Mesh(geometry, material); // 点模型对象
scene.add(mesh);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const control = new OrbitControls(camera, renderer.domElement);

document.body.appendChild(renderer.domElement);

animate();
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
