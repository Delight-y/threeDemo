import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// 1. 创建一个场景
const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerHeight; // 宽高比
// 2. 创建一个相机
const camera = new THREE.PerspectiveCamera(45, aspect, 1, 1000); // 透视相机 fov aspect near far
camera.position.z = 10;
// 3. 渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器大小
// 4. 将renderer绘制好的内容canvas挂载到body
document.body.appendChild(renderer.domElement);

// 箭头辅助器 用于模拟3维箭头对象
const dir = new THREE.Vector3(1, 2, 0); // 基于箭头原点的方向 必须是矢量
dir.normalize(); // 将该向量转换为单位向量 也就是说方向与原方向相同 长度置为1
const origin = new THREE.Vector3(0, 0, 0); //箭头的原点
const length = 2;
const color = 0xffff00;
const arrowHelper = new THREE.ArrowHelper(dir, origin, length, color); // 箭头辅助器
scene.add(arrowHelper);

const axes = new THREE.AxesHelper(5); // 坐标辅助器
scene.add(axes);
const controls = new OrbitControls(camera, renderer.domElement); // 轨道控制器

const geometry = new THREE.SphereGeometry(1, 120, 60); // 球体
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xbffbff });
const cube = new THREE.Mesh(boxGeometry, material);
scene.add(cube);
function animate() {
  // 球体随x轴进行移动并旋转
  cube.position.x += 0.01;
  cube.rotation.x += 0.01;
  if (cube.position.x > 5) {
    cube.position.x = 0;
  }
  // 每一帧都进行渲染绘制
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate(); // 执行渲染
