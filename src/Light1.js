import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * @desciption 基础场景使用
 */
// 1. 创建一个场景对象
var scene = new THREE.Scene();
// 2. 设置一个相机 常用的为透视相机(另一种为正交相机)
// 相机三要素：position、lookAt(默认0,0,0位置)、up
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
); // fov、aspect、near、far

const axes = new THREE.AxesHelper(20); // 坐标辅助器
scene.add(axes);
// 3. 创建一个渲染器 若浏览器不支持webgl 可选择其他降级的渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染器大小 将输出canvas的大小调整为(width, height)并考虑设备像素比，
renderer.setSize(window.innerWidth, window.innerHeight);

// 轨道控制器
const control = new OrbitControls(camera, renderer.domElement);

// 4. 将renderer绘制好的canvas挂载到页面
document.body.appendChild(renderer.domElement);

// 在场景上创建多个物体
const boxGeometry = new THREE.BoxGeometry(2, 2, 2); // 长宽高均为1的立方体
const sphereGeometry = new THREE.SphereGeometry(1, 32, 16); // 球体
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 5, 8); // 圆柱体
// 设置图形的材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// 网格模型对象
const mesh1 = new THREE.Mesh(boxGeometry, material); // 立方体
const mesh2 = new THREE.Mesh(sphereGeometry, material);
const mesh3 = new THREE.Mesh(cylinderGeometry, material);

// 创建一个Group对象
const group = new THREE.Group();

mesh2.translateX(10); // mesh2向x轴正方向移动10
mesh3.translateY(10); // mesh3向y轴正方向移动10
group.add(mesh1, mesh2, mesh3); // 将模型对象添加到group中
scene.add(group);

// 添加环境光
const light = new THREE.AmbientLight(0x404040);
// scene.add(light);

// 添加点光源
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(6, 10, 6);
scene.add(pointLight);
const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize); // 模拟点光源
scene.add(pointLightHelper);

// 添加太阳光 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff);
// 通过position与target确定光源方向
directionalLight.position.set(6, 10, 6);
directionalLight.target = mesh2; // target光照的目标对象 默认(0, 0, 0)
// 模拟平行光
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
// scene.add(directionalLightHelper);
// scene.add(directionalLight);

// 可以将相机位置向后移动
camera.position.z = 25;

// 最后就是将场景进行渲染
function animate() {
  // 每一帧都进行绘制
  requestAnimationFrame(animate);
  renderer.render(scene, camera); // 绘制到canvas上
}
animate();
