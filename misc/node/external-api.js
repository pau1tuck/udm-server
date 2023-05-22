/* Fetch():
The fetch() method returns a Promise object. */
export const readJSON_Fetch = (path) => {
	return fetch(path)
		.then((response) => response.json())
		.then((json) => {
			return JSON.parse(json);
		})
		.catch((err) => {
			throw new Error(err);
		});
};
