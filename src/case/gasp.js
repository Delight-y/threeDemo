import gsap from "gsap"; // 导入动画库
// 创建时间线动画
let timeLine = gsap.timeline();
timeLine.to(".green", {
  x: 600,
  duration: 2,
  yoyo: true,
  //   repeat: -1,
  ease: "none",
});
timeLine.to(".purple", {
  x: 600,
  duration: 1,
  rotation: 360,
  //   repeat: -1,
  yoyo: true,
  ease: "bounce.out", // 有反弹效果
});
timeLine.to(".orange", { x: 600, duration: 1, ease: "power1.out" }); // 'power1.out'启动时速度很快 缓慢停下 产生一种摩擦感

// 元素渐入的效果
gsap.from(".box", {
  duration: 2,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "elastic",
  force3D: true,
});
// getElementsByClassName获取的为动态集合
// querySelectorAll获取的是静态集合 性能较快 但是不能及时更新动态添加元素
// 给box添加点击监听事件
document.querySelectorAll(".box").forEach(function (box) {
  box.addEventListener("click", function (e) {
    gsap.to(".box", {
      yoyo: true,
      duration: 1,
      ease: "back",
      // ease: "elastic",
      x: 0,
      stagger: 0.2, // 即为将.box选中多个元素设置为每隔0.2秒开始运动1个元素实现效果
    });
  });
});
