const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./dist"));

function start() {
	try {
		app.listen(PORT, () => {
			console.log(`Example app listening on port ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
}

start();
