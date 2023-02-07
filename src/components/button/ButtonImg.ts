import { Block } from "../../utils";
import "./button.css";


interface IButtonProps {
	src: string;
	href?: string;
	type?: string;
	addClass?: string;
	onClick?: () => void;
	events?: Record<string, Record<string, (event: Event) => void> | unknown>;
}

export class ButtonImg extends Block<IButtonProps> {
	static componentName = 'ButtonImg';
	constructor({ src, href, type, addClass, onClick }: IButtonProps) {
		super({ src, href, type, addClass, events: { click: onClick } });
	}
	protected render(): string {
		return `
		<div class="btn {{addClass}}">
		 <button  
			{{#if type}}
			type="{{type}}"
			{{else}}
			type="button"
			{{/if}}
			onClick="{{onClick}}"
			>
			<img src={{src}}/>
			</button>
	</div>
		`;
	}
}
