const buildForYou = document.getElementById("build-for-you");
const imageCover = document.getElementById("image-cover");
const layoutMain = document.getElementById("layout-main");
const buildForYouSection = document.getElementById("buildForYouSection");

const home = document.getElementById("home");

const landing = document.getElementById("landing");

buildForYou.addEventListener("click", () => {
  landing.style.display = "none";
  buildForYouSection.style.display = "block";
  imageCover.style.display = "block";
  layoutMain.classList.add("is-showBackImage");
});

home.addEventListener("click", () => {
  landing.style.display = "block";
  buildForYouSection.style.display = "none";
  imageCover.style.display = "none";
  layoutMain.classList.remove("is-showBackImage");
});
