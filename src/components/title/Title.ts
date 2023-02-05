import {Block} from "../../utils";
import "./title.css";
import template from "./title.hbs";

interface ITitle {
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	addClass?: string;
	text: string;
}

export class Title extends Block {
	constructor({tag, addClass, text}: ITitle) {
		super({tag, addClass, text});
	}
	protected render() {
		return template({...this.props});
	}
}
