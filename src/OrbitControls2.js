import * as THREE from "three";
// 引入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
/**
 * @desciption 轨道控制器的使用 及 辅助器的使用
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

// 3. 创建一个渲染器 若浏览器不支持webgl 可选择其他降级的渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染器大小 将输出canvas的大小调整为(width, height)并考虑设备像素比，
renderer.setSize(window.innerWidth, window.innerHeight);

// 4. 将renderer绘制好的canvas挂载到页面
document.body.appendChild(renderer.domElement);

// 在场景上创建物体
const boxGeometry = new THREE.BoxGeometry(1, 1, 1); // 长宽高均为1的立方体
// 设置图形的材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff00 });
// 表示基于以三角形为polygon mesh（多边形网格）的物体的类。
const cube = new THREE.Mesh(boxGeometry, material); // 立方体

// 把所创建的物体添加到场景中
scene.add(cube); // 默认添加到(0,0,0)位置 会出现相机位置跟立方体重叠的问题
// 可以将相机位置向后移动
camera.position.z = 3;

// 添加轨道控制器
const control = new OrbitControls(camera, renderer.domElement); // 要被控制的相机、用于事件监听的HTML元素
control.autoRotate = true; // 设置自动旋转
// 默认为true 相当于关闭了用户控制操作
// control.enabled = false
// 是否可缩放
control.enableZoom = true;

// 使用坐标轴辅助器
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// 最后就是将场景进行渲染
function animate() {
  // 每一帧都进行绘制
  requestAnimationFrame(animate);
  // 请注意，如果它被启用，你必须在你的动画循环里调用.update()。
  control.update();
  renderer.render(scene, camera); // 绘制到canvas上
}
animate();
