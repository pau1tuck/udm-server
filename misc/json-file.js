const fs = require("fs").promises;
const staticJSON = require("./static.json");

// Async / await
export const readJSON = async (path) => {
  try {
    JSON.parse(await fs.readFile(path), {
      encoding: "utf-8",
      flag: "r",
    });
  } catch (error) {
    console.log(error);
  }
};
