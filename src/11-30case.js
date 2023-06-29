import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/orbitcontrols";

const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerWidth;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 12;
scene.add(camera);
document.body.appendChild(renderer.domElement);
// 设置平行光
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(-1, 1, 5);
const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  1
);
scene.add(directionalLightHelper);
scene.add(directionalLight);

// 坐标辅助器
const axes = new THREE.AxesHelper(5);
scene.add(axes);
const control = new OrbitControls(camera, renderer.domElement);
const geometry = new THREE.BoxGeometry(1, 1, 1);
function makeInstance(geometry, color, x) {
  const material = new THREE.MeshPhongMaterial({ color }); // 受光影响的材质
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.x = x;
  return cube;
}
const cubes = [
  makeInstance(geometry, 0x44aa88, 0),
  makeInstance(geometry, 0x8844aa, -2),
  makeInstance(geometry, 0xaa8844, 2),
];
directionalLight.target = cubes[1];

requestAnimationFrame(render);

// 给每个旋转体设置稍微不同的旋转角度
function render(time) {
  time *= 0.001;
  cubes.forEach((cube, index) => {
    const speed = 1 + index * 0.1;
    const rot = time * speed;
    cube.rotation.x = rot;
    cube.rotation.y = rot;
  });
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
