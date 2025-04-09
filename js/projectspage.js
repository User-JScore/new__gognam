const popup = document.querySelector(".container__popup");
const closeButton = document.querySelector(".container__popup__close");
const projectsList = document.querySelectorAll(
  ".container__projects__man__portfolio__contentbox__item"
);

projectsList.forEach((project) => {
  project.addEventListener("click", () => {
    popup.classList.toggle("__popup-active");
  });
});

closeButton.addEventListener("click", () => {
  popup.classList.toggle("__popup-active");
});

const dirs = [
  "1-1",
  "1-2",
  "1-3",
  "1-4",
  "1-5",
  "2-1",
  "2-2",
  "3-1",
  "3-2",
  "3-3",
  "4-1",
  "4-2",
  "4-3",
];
