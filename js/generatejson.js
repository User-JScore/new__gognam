const fs = require("fs").promises;
const path = require("path");
const { pathToFileURL } = require("url");

async function readProjects() {
  try {
    const projectsDirs = JSON.stringify(
      await fs.readdir("../src/projects"),
      null
    );
    console.log(projectsDirs);
    await fs.writeFile("projectsDirs", projectsDirs);
    console.log("File Written");
  } catch (err) {
    console.log(err);
  }
}

readProjects();

async function readPhotos() {
  try {
  } catch (err) {
    console.log(err);
  }
}

readPhotos();
