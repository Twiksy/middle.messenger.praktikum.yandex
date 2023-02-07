import { Block } from "../../utils";
import "./button.css";
import template from "./button.hbs";

interface IButtonProps {
	textBtn: string;
	href?: string;
	type?: string;
	addClass?: string;
	onClick?: () => void;
	events?: Record<string, Record<string, (event: Event) => void> | unknown>;
}

export class Button extends Block<IButtonProps> {
	static componentName = 'Button';
	constructor({ textBtn, href, type, addClass, onClick }: IButtonProps) {
		super({ textBtn, href, type, addClass, events: { click: onClick } });
	}
	protected render(): string {
		return template({ ...this.props });
	}
}
