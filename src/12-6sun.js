import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 设置相机的位置
camera.position.set(0, 50, 0); // 将相机设置在y轴
camera.up.set(0, 0, 1); // 相机从上往下看
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 要更新旋转角度的对象数组
const objects = [];

// 一球多用
const radius = 1;
const widthSegements = 6;
const heightSegments = 6;
const geometry = new THREE.SphereGeometry(
  radius,
  widthSegements,
  heightSegments
);
// 太阳
const material = new THREE.MeshPhongMaterial({ emissive: 0xffff00 }); // emissive放射光的颜色
const sunMesh = new THREE.Mesh(geometry, material);
sunMesh.scale.set(5, 5, 5); // 扩大太阳的大小 这个局部空间扩大5倍
// scene.add(sunMesh);
objects.push(sunMesh);
// 地球
const earthMaterail = new THREE.MeshPhongMaterial({
  color: 0x2233ff,
  emissive: 0x112244,
});
const earthMesh = new THREE.Mesh(geometry, earthMaterail);
earthMesh.position.x = 10; // 显示在太阳左边10个单位
// scene.add(earthMesh);
// 让地球围绕太阳运动 此时发现地球围绕太阳正常运行 但是地球的大小突然跟太阳一样了 原因时太阳的局部空间扩大了5倍 将地球加到太阳的局部空间中 地球也将对应扩大5倍
// sunMesh.add(earthMesh);
objects.push(earthMesh); // 添加到objects中实现同时旋转

// 为了解决以上问题 我们再创建一个空的场景图节点
const solarSystem = new THREE.Object3D();
// 相当于把所有物体添加到solarSystem中 然后整个添加到场景中去  内部彼此之间是独立的
scene.add(solarSystem);
objects.push(solarSystem);
solarSystem.add(sunMesh);
solarSystem.add(earthMesh);

// 设置一个点光源
const color = 0xffffff;
const intensity = 3;
const pointLight = new THREE.PointLight(color, intensity);
scene.add(pointLight);

render();
function render(time) {
  renderer.render(scene, camera);
  objects.forEach((obj) => {
    obj.rotation.y += 0.01;
  });
  requestAnimationFrame(render);
}
