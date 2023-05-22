const fs = require("fs").promises;

// Basic Node.js synchronous call:
const staticJSON = require("./static.json");

// Async / await:
export const readJSON_Async = async (path) => {
	try {
		const data = await fs.readFile(path, {
			encoding: "utf-8",
			flag: "r",
		});
		return JSON.parse(data);
	} catch (err) {
		throw new Error(err);
	}
};

/* Promises:
The Promise object represents the eventual completion (or failure) of an asynchronous operation. */

export const readJSON_Promise = (path) => {
	return fs
		.readFile(path, {
			encoding: "utf-8",
			flag: "r",
		})
		.then((data) => {
			return JSON.parse(data);
		})
		.catch((err) => {
			throw new Error(err);
		});
};

// Callbacks:
