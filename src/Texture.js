import * as THREE from "three";

// 创建一个矩形平面
const geometry = new THREE.PlaneGeometry(320, 300); // 平面矩形
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

const axes = new THREE.AxesHelper(300);
scene.add(axes);

camera.position.z = 300;
// // 创建一个纹理加载器 构建一个texture对象
// const texture = new THREE.TextureLoader().load("./img/earth.jpeg");

// const material = new THREE.MeshLambertMaterial({
//   map: texture, // 设置贴图属性值
// }); // 非光泽表面的一种材质
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

var ImageLoader = new THREE.ImageLoader();
// load方法回调函数，按照路径加载图片，返回一个html的元素img对象
ImageLoader.load('./img/earth.jpeg', function(img) {
    console.log('img', img)
  // image对象作为参数，创建一个纹理对象Texture
  var texture = new THREE.Texture(img);
  // 下次使用纹理时触发更新
  texture.needsUpdate = true;
  var material = new THREE.MeshLambertMaterial({
    map: texture, //设置纹理贴图
  });
  var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  scene.add(mesh); //网格模型添加到场景中
});

animation();

function animation() {
  requestAnimationFrame(animation);
  renderer.render(scene, camera);
}
