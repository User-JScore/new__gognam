const popup = document.querySelector(".container__popup");
const closeButton = document.querySelector(".container__popup__close");
const projectsListContainer = document.querySelector(
  ".container__projects__main__portfolio__contentbox"
);
const sort = document.querySelectorAll(".__sort");
const projectSlider = document.querySelector(
  ".container__popup__contentbox__slides"
);

let baseProjects = []; // исходный полный список проектов
let currentProjects = []; // текущий отображаемый список (может быть отфильтрован)

// Открытие popup при клике на проект
projectsListContainer.addEventListener("click", (e) => {
  const projectItem = e.target.closest(
    ".container__projects__main__portfolio__contentbox__item"
  );

  if (projectItem) {
    const items = document.querySelectorAll(
      ".container__projects__main__portfolio__contentbox__item"
    );
    const index = [...items].indexOf(projectItem);

    popup.classList.add("__popup-active");
    document.body.style.overflow = "hidden";

    const projectDir = currentProjects[index]; //  используем текущий список
    loadPhotos(projectDir);
  }
});

// Закрытие popup
closeButton.addEventListener("click", () => {
  popup.classList.remove("__popup-active");
  document.body.style.overflow = "auto";
});

// Загрузка проектов
fetch("./js/json/projectsDirs")
  .then((response) => response.json())
  .then((json) => {
    baseProjects = json;
    currentProjects = json; //  устанавливаем текущий список
    renderProjects(currentProjects);
  });

// Отрисовка проектов
function renderProjects(projects) {
  projectsListContainer.innerHTML = ""; // очищаем контейнер

  for (const project of projects) {
    const card = document.createElement("div");
    card.className = "container__projects__main__portfolio__contentbox__item";
    card.style.backgroundImage = `url("../src/projects/${project}/1.webp")`;
    projectsListContainer.appendChild(card);
  }
}

// Фильтрация по категории
sort.forEach((sortItem, count) => {
  sortItem.addEventListener("click", () => {
    const filtered = baseProjects.filter((project) =>
      project.startsWith(`${count + 1}-`)
    );
    currentProjects = filtered; //  обновляем текущий список
    renderProjects(currentProjects);
  });
});

// Загрузка фото в popup
function loadPhotos(projectDir) {
  fetch(`../js/json/${projectDir}`)
    .then((res) => res.json())
    .then((photos) => {
      projectSlider.innerHTML = ""; // Очищаем предыдущие слайды

      photos.forEach((photo) => {
        const slide = document.createElement("div");
        slide.className = "container__popup__contentbox__slides__item";
        slide.style.backgroundImage = `url("../src/projects/${projectDir}/${photo}")`;
        projectSlider.appendChild(slide);
      });
    })
    .catch((err) => {
      console.error(`Не удалось загрузить фото для ${projectDir}:`, err);
    });
}
