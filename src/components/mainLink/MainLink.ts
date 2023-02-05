import {Block} from "../../utils";
import template from "./mainLink.hbs";

interface IMainLink {
	linkText: string;
	href: string;
}
export class MainLink extends Block {
	constructor({linkText, href}: IMainLink) {
		super({linkText, href});
	}
	protected render(): string {
		return template({...this.props});
	}
}
