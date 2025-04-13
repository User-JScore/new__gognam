const fs = require("fs").promises;
const path = require("path");

async function readProjects() {
  try {
    const projectsPath = path.join(__dirname, "../src/projects");
    const projectsDirs = await fs.readdir(projectsPath);

    const jsonProjectsDirs = JSON.stringify(projectsDirs, null, 2);
    await fs.writeFile("./json/projectsDirs", jsonProjectsDirs);

    for (const dir of projectsDirs) {
      try {
        const fullDirPath = path.join(projectsPath, dir);
        const projectPhotos = await fs.readdir(fullDirPath);
        const jsonProjectPhotos = JSON.stringify(projectPhotos, null, 2);
        await fs.writeFile(`./json/${dir}`, jsonProjectPhotos);
      } catch (err) {
        console.error(`Ошибка при чтении папки ${dir}:`, err);
      }
    }
  } catch (err) {
    console.error("Ошибка при чтении проекта:", err);
  }
}

readProjects();
