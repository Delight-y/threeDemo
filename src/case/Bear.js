import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

/**
 * 3D水晶小熊的案例
 */
// 初始化场景
const scene = new THREE.Scene();
// 初始化相机
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 初始化相机位置
camera.position.set(1.5, 1, 1.5);
camera.aspect = window.innerWidth / window.innerHeight;

// 添加纹理
const loader = new THREE.TextureLoader();
const bgTexture = loader.load("/texture/bear.jpg");
bgTexture.mapping = THREE.EquirectangularRefractionMapping;

// 加载背景纹理
scene.background = bgTexture;
// scene.environment = bgTexture;

// 添加环境光 如果不加光 小熊就是黑的
const ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);

const gltfLoader = new GLTFLoader(); 
gltfLoader.load("model/bear.gltf", (gltf) => {
  const model = gltf.scene.children[0];
  // 一种用于具有镜面高光的光泽表面的材质。
  model.material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    envMap: bgTexture, // 环境贴图
    refractionRatio: 0.7,
    reflectivity: 0.99,
  });

  scene.add(model);
});

// 初始化渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
// 设置渲染器大小
renderer.setSize(window.innerWidth, window.innerHeight);

// 轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 将渲染器添加到页面
document.body.appendChild(renderer.domElement);
// 渲染函数
const render = () => {
  // 渲染场景
  renderer.render(scene, camera);
  // 循环渲染
  requestAnimationFrame(render);
};

render();
