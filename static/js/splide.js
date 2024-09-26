var splide = new Splide(".splide", {
  type: "loop",
  perPage: 1,
  padding: "0px",
  autoplay: true,
  pauseOnHover: true,
  focus: "center",
  interval: 3000,
  heightRatio: "0.5",
  rewindByDrag: true,
  lazyLoad: "nearby",
  preloadPages: 3,
});
splide.mount();

var slide_static = 1;
setInterval(function () {
  let img = document
    .getElementById("splide-static")
    .getElementsByTagName("img")[0];
  img.src = `/static/img/screenshot${slide_static}.png`;
  slide_static++;
  if (slide_static > 3) {
    slide_static = 1;
  }
}, 3000);
