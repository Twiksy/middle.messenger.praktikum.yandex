const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./dist"));

function start() {
	try {
		app.listen(PORT,() => {
			const fields: fieldType = {}
			inputs.forEach((inp) => {
				const input: HTMLInputElement = inp[1].querySelector('input')
				const errorText = validate(input)
				inp[1].dataset.error = errorText;
				if (errorText !== '') {
					errors += 1
				}

				fields[input.name] = input.value
			})(`Example app listening on port ${PORT}`);
		});
	} catch (e) {
		 const fields: fieldType = {}
        inputs.forEach((inp) => {
          const input: HTMLInputElement = inp[1].querySelector('input')
          const errorText = validate(input)
          inp[1].dataset.error = errorText;
          if (errorText !== '') {
            errors += 1
          }

          fields[input.name] = input.value
        })(e);
	}
}

start();
