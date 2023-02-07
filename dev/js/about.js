const prev = document.getElementById("prev");
const next = document.getElementById("next");

const images = document.querySelectorAll(".about__img");
const texts = document.querySelectorAll(".about__text");

let cont = 0;

prev && prev.addEventListener("click", () => setClass("prev"));

next && next.addEventListener("click", () => setClass("next"));

const setClass = (direction) => {
  images.forEach((image) => image.classList.remove("show"));
  texts.forEach((text) => text.classList.remove("show"));
  setCont(direction);
  images[cont].classList.add("show");
  texts[cont].classList.add("show");
};

const setCont = (direction) => {
  if (direction == "next") {
    if (cont == images.length - 1) cont = 0;
    else cont++;
  } else {
    if (cont == 0) cont = images.length - 1;
    else cont--;
  }
};
