const buildForYou = document.getElementById("build-for-you");
const buildForYouSection = document.getElementById("buildForYouSection");

const home = document.getElementById("home");

const landing = document.getElementById("landing");

buildForYou.addEventListener("click", () => {
  landing.style.display = "none";
  buildForYouSection.style.display = "block";
});

home.addEventListener("click", () => {
  landing.style.display = "block";
});

landing.style.display = "none";
buildForYouSection.style.display = "block";
