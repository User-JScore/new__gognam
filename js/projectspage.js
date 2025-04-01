const popup = document.querySelector(".container__popup");
const closeButton = document.querySelector(".container__popup__close");
const projectsList = document.querySelectorAll(
  ".container__projects__man__portfolio__contentbox__item"
);

projectsList.forEach((project) => {
  project.addEventListener("click", () => {
    console.log(popup);
    popup.classList.toggle("__popup-active");
  });
});

closeButton.addEventListener("click", () => {
  popup.classList.toggle("__popup-active");
});
