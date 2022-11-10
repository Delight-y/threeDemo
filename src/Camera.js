import * as THREE from "three";

// 正交相机与透视相机的区别
let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;

let aspect = SCREEN_WIDTH / SCREEN_HEIGHT; // 宽高比

let container; // 容器
let scene, camera;
let cameraPerspectiveHelper,
  cameraPerspective,
  ctiveCamera,
  activeHelper,
  cameraRig;
// 初始化场景
init();
function init() {
  container = document.createElement("div");
  document.body.appendChild(container);

  scene = new THREE.Scene(); // 场景
  camera = new THREE.PerspectiveCamera(50, aspect, 1, 2000); // 透视相机

  camera.position.z = 2500; // 设置相机位置
  cameraPerspective = new THREE.PerspectiveCamera(50, 0.5 * aspect, 150, 1000);

  cameraPerspectiveHelper = new THREE.CameraHelper(cameraPerspective);
  scene.add(cameraPerspectiveHelper);

  ctiveCamera = cameraPerspective;
  activeHelper = cameraPerspectiveHelper;

  cameraRig = new THREE.Group();
  cameraRig.add(cameraPerspective);

  scene.add(cameraRig);

  mesh = new THREE.Mesh(
    new THREE.SphereGeometry(100, 16, 8),
    new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
  );
  scene.add(mesh);

  const mesh2 = new THREE.Mesh(
    new THREE.SphereGeometry(50, 16, 8),
    new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
  );
  mesh2.position.y = 150;
  mesh.add(mesh2);

  const mesh3 = new THREE.Mesh(
    new THREE.SphereGeometry(5, 16, 8),
    new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
  );
  mesh3.position.z = 150;
  cameraRig.add(mesh3);
}
