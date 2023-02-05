import {Block} from "../../utils";
import "./asideItem.css";
import template from "./asideItem.hbs";

interface IAsideItemProps {
	hoverText: string;
	svgText: string;
}

export class AsideItem extends Block {
	constructor({hoverText, svgText}: IAsideItemProps) {
		super({hoverText, svgText});
	}

	protected render(): string {
		return template({...this.props});
	}
}
