const popup = document.querySelector(".container__popup");
const closeButton = document.querySelector(".container__popup__close");
const projectsListContainer = document.querySelector(
  ".container__projects__main__portfolio__contentbox"
);
const projectSlider = document.querySelector(
  ".container__popup__contentbox__slides"
);
const slideItem = document.querySelectorAll(
  ".container__popup__contentbox__slides__item"
);

let baseProjects = [];

fetch("../js/projectsDirs")
  .then((response) => response.json())
  .then((json) => {
    baseProjects = json;
    for (project in json) {
      let card = document.createElement("div");
      card.className = "container__projects__main__portfolio__contentbox__item";
      projectsListContainer.appendChild(card);
      card.style.backgroundImage = `url("../src/projects/${json[project]}/main_img.jpg")`;
    }
  });

setInterval(() => {
  const projectsList = document.querySelectorAll(
    ".container__projects__main__portfolio__contentbox__item"
  );
  const sort = document.querySelectorAll(".__sort");

  projectsList.forEach((project) => {
    project.addEventListener("click", () => {
      popup.classList.add("__popup-active");
      document.body.style.overflow = "hidden";
    });
  });

  closeButton.addEventListener("click", () => {
    popup.classList.remove("__popup-active");
    document.body.style.overflow = "auto";
  });

  sort.forEach((sortItem, count) => {
    sortItem.addEventListener("click", () => {
      removeEl();

      for (project in baseProjects) {
        if (baseProjects[project][0] == count + 1) {
          let card = document.createElement("div");
          card.className =
            "container__projects__main__portfolio__contentbox__item";
          projectsListContainer.appendChild(card);
          card.style.backgroundImage = `url("../src/projects/${baseProjects[project]}/main_img.jpg")`;
        }
      }
    });
  });
}, 0);

function removeEl() {
  const projectsList = document.querySelectorAll(
    ".container__projects__main__portfolio__contentbox__item"
  );

  projectsList.forEach((project, count) => {
    let lastEl = projectsListContainer.lastElementChild;
    projectsListContainer.removeChild(lastEl);
  });
}
