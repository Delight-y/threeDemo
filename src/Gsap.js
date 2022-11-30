// gsap高性能动画
import * as THREE from "three";
import gsap from "gsap"; // 导入动画库
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// 1. 创建一个场景
const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerHeight; // 宽高比
// 2. 创建一个相机
const camera = new THREE.PerspectiveCamera(45, aspect, 1, 1000); // 透视相机 fov aspect near far
camera.position.z = 10;
// 3. 渲染器
// 自定义一个canvas标签
const canvas = document.querySelector('#box');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2); // 设置渲染器大小
// 4. 将renderer绘制好的内容canvas挂载到body
// document.body.appendChild(renderer.domElement);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "green" });
const cube = new THREE.Mesh(boxGeometry, material);

scene.add(cube);

const axes = new THREE.AxesHelper(5);
scene.add(axes);
const controls = new OrbitControls(camera, renderer.domElement); // 轨道控制器

// 设置移动动画
const animation = gsap.to(cube.position, {
  x: 5,
  duration: 5,
  yoyo: true, // 往返运动
  repeat: -1, // 是否重复
  ease: "rough",
  delay: 2, // 延迟2秒运行
  onComplete: () => {
    console.log("动画完成");
  },
  onStart: () => {
    console.log("动画开始");
  },
});
// 设置旋转动画
gsap.to(cube.rotation, {
  x: 2 * Math.PI,
  duration: 6,
  ease: "power1.inOut",
});

// 鼠标点击控制动画
window.addEventListener("click", function () {
  if (animation.isActive()) {
    animation.pause();
  } else {
    animation.resume();
  }
});

// 监听浏览器屏幕大小变化 更新渲染页面
window.addEventListener("resize", function () {
  console.log("浏览器大小变化了");
  // 更新相机aspect
  camera.aspect = window.innerWidth / window.innerHeight;
  // 更新相机的摄影矩阵 相机任何参数被改变以后必须被调用
  camera.updateProjectionMatrix();
  // 更新渲染器
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  // 设置渲染器的像素比
  renderer.setPixelRatio(window.devicePixelRatio);
});

// 画布全屏 双击实现全屏
window.addEventListener("dblclick", function () {
  const fullScreenElement = document.fullscreenElement;
  if (!fullScreenElement) {
    renderer.domElement.requestFullscreen();
  } else {
    // 退出全屏
    document.exitFullscreen();
  }
});

// 渲染
function render() {
  // 每一帧都进行渲染绘制
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render(); // 执行渲染
