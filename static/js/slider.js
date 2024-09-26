var glide = new Glide(".glide", {
  type: "carousel",
  startAt: 1,
  perView: 1,
  autoplay: 5000,
  focusAt: "center",
  animationDuration: 2000,
  touchRation: 0.5,
  peek: {
    before: 20,
    after: 20,
  },
  gap: 200,
  hoverpause: true,
});
glide.mount();

var slide_static = 1;
setInterval(function () {
  let img = document
    .getElementById("glide-static")
    .getElementsByTagName("img")[0];
  img.src = `/static/img/screenshot${slide_static}.png`;
  slide_static++;
  if (slide_static > 3) {
    slide_static = 1;
  }
}, 3000);
