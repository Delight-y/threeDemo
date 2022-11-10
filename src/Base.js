import * as THREE from "three";

// 1. 创建一个场景
const scene = new THREE.Scene();

const aspect = window.innerWidth / window.innerHeight; // 宽高比

// 2. 创建一个相机
const camera = new THREE.PerspectiveCamera(45, aspect, 1, 1000); // 透视相机 fov aspect near far

// 3. 渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器大小

// 4. 将renderer绘制好的内容canvas挂载到body
document.body.appendChild(renderer.domElement);

function animate() {
  // 每一帧都进行渲染绘制
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate(); // 执行渲染
