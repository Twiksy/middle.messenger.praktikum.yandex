import { Block } from "../../utils";
import "./button.css";
import template from "./Button.hbs";

interface IButtonProps {
	textBtn: string;
	onClick?: () => void;
	href?: string;
	type?: string;
	addClass?: string;
}

export class Button extends Block {
	static componentName = 'Button';
	constructor({ textBtn, href, type, addClass, onClick }: IButtonProps) {
		super({ textBtn, href, type, addClass, events: { click: onClick } });
	}
	protected render(): string {
		return template({ ...this.props });
	}
}
