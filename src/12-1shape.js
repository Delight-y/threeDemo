import * as THREE from "three";
// 形状几何体

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 16;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const shape = new THREE.Shape(); // 可选的point二维数组参数，如果未指定则默认创建一个空的形状 且currentPoint默认为原点
const x = 2.5;
const y = -5;
shape.moveTo(5, -2.5); // 开始点
shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y); // 贝塞尔曲线 (5, -2.5, 4.5, -5, 2.5, -5) 5/-2.5控制点1 4.5/-5控制点2 2.5/-5结束点
shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
// 挤压缓冲几何体
const options = {
  steps: 2, // 沿着挤出样条的深度细分的点的数量
  depth: 2, // 挤出的形状的深度
  bevelEnabled: true, // 对挤出的形状应用是否斜角
  bevelThickness: 1, // 原始形状上斜角的厚度
  bevelSize: 1, // 斜角与原始形状轮廓之间的延伸距离
  bevelSegments: 2, // 斜角的分段层数
};
const geometry = new THREE.ExtrudeGeometry(shape, options);
const radius = 7; // ui: radius
// const geometry = new THREE.IcosahedronGeometry(radius);
const material = new THREE.MeshBasicMaterial({
  color: 0x44aa88,
  opacity: 0.5,
  transparent: false,
});
const mesh = new THREE.LineSegments(geometry, material);
scene.add(mesh);
render();
function render() {
  renderer.render(scene, camera); // 设置立方体旋转
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  requestAnimationFrame(render);
}
