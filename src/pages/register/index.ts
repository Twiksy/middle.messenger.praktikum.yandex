import { Aside } from "./../../blocks/aside/Aside";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Title } from "../../components/title/Title";
import { registerComponent, renderDOM } from "../../utils";
import { InputBlock } from "../../components/input/inputBlock";
import { Register } from "./Register";

registerComponent(Button);
registerComponent(Aside);
registerComponent(Input);
registerComponent(Title);
registerComponent(InputBlock);


document.addEventListener("DOMContentLoaded", function () {
	const page = new Register();

	renderDOM(page);
});