import * as THREE from "three";
// 引入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
/**
 * 点、线、网格模型
 * 扩展：精灵模型
 */
// 1. 创建一个场景
const scene = new THREE.Scene();

const k = window.innerWidth / window.innerHeight; // 宽高比
const s = 20;
// 2. 创建一个相机
const camera = new THREE.PerspectiveCamera(45, k, 0.1, 1000); // 透视相机 fov k near far
// const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000); // 正交相机
// 3. 渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器大小

// 4. 将renderer绘制好的内容canvas挂载到body
document.body.appendChild(renderer.domElement);

// 使用坐标辅助线
const axes = new THREE.AxesHelper(10);
scene.add(axes);
// 添加轨道控制器
const control = new OrbitControls(camera, renderer.domElement);

/**
 * @description 采用点模型
 */
const geometry = new THREE.BoxGeometry(10, 10, 10); // 创建一个立方体几何对象
// 材质对象 如果采用点模型 对应使用点材质
const material = new THREE.PointsMaterial({
  color: 0x00ffff00,
  size: 2, // 点对象像素大小
});
// 点模型对象
const point = new THREE.Points(geometry, material);
// 将模型对象添加到场景中
scene.add(point);
camera.position.z = 30;

/**
 * @description 采用线模型
 */
// const material = new THREE.LineBasicMaterial({
//   color: 0x00ffff00,
// });
// const lineObj = new THREE.Line(geometry, material);
// scene.add(lineObj);
// camera.position.z = 30;
/**
 * @description 采用网格模型
 */
// const material = new THREE.MeshBasicMaterial({ color: 0x00ffff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// camera.position.z = 30;

function animate() {
  // 每一帧都进行渲染绘制
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate(); // 执行渲染
