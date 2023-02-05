import { Aside } from "./../../blocks/aside/Aside";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Title } from "../../components/title/Title";
import { registerComponent, renderDOM } from "../../utils";
import { InputBlock } from "../../components/input/inputBlock";
import { ButtonImg } from "../../components/button/ButtonImg";
import { SignInPage } from "./SingIn";

registerComponent(Button);
registerComponent(Aside);
registerComponent(Input);
registerComponent(Title);
registerComponent(InputBlock);
registerComponent(ButtonImg);

document.addEventListener("DOMContentLoaded", function () {
	const page = new SignInPage();

	renderDOM(page);
});
