import { Title } from './../../components/title/Title';
import { Aside } from "./../../blocks/aside/Aside";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { registerComponent, renderDOM } from "../../utils";
import { InputBlock } from "../../components/input/inputBlock";
import { SignIn } from "./SingIn";




registerComponent(Button);
registerComponent(Aside);
registerComponent(Input);
registerComponent(Title);
registerComponent(InputBlock);


document.addEventListener("DOMContentLoaded", function () {
	const page = new SignIn();
	renderDOM(page);
});
