import * as THREE from "three";
/**
 * Texture 纹理学习
 */
// 创建一个球体
const geometry = new THREE.SphereGeometry(5, 32, 16);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const axes = new THREE.AxesHelper(30);
scene.add(axes);

camera.position.z = 30;

const textureLoader = new THREE.TextureLoader();
// load方法回调函数，按照路径加载图片，返回一个html的元素img对象
const texture1 = textureLoader.load("texture/wood.jpeg");
const material1 = new THREE.MeshBasicMaterial({
  map: texture1, //设置纹理贴图
});
const mesh1 = new THREE.Mesh(geometry, material1); //网格模型对象Mesh

const texture2 = textureLoader.load("texture/wood1.jpeg");
const material2 = new THREE.MeshBasicMaterial({
  map: texture2, //设置纹理贴图
});
const mesh2 = new THREE.Mesh(geometry, material2); //网格模型对象Mesh
mesh1.translateX(-10);
mesh2.translateX(10); // 向x轴正向移动10

const group = new THREE.Group();
group.add(mesh1, mesh2); // 将模型作为一个整体添加到组中

scene.add(group); //网格模型添加到场景中

animation();

function animation() {
  requestAnimationFrame(animation);
  group.rotation.x += 0.01;
  group.rotation.y += 0.01;
  renderer.render(scene, camera);
}
