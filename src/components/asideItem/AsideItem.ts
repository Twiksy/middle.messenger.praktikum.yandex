import { Block } from "../../utils";
import "./asideItem.css";
import template from "./asideItem.hbs";

interface IAsideItemProps {
	hoverText: string;
	svgText: string;
	onClick?: () => void;
	events?: Record<string, Record<string, (event: Event) => void> | unknown>;
	pathName?: string
}

export class AsideItem extends Block<IAsideItemProps> {
	static componentName = 'AsideItem';
	constructor({ hoverText, svgText, onClick, pathName }: IAsideItemProps) {
		super({ hoverText, svgText, pathName, events: { click: onClick } });
	}

	protected render(): string {
		return template({ ...this.props });
	}
}
