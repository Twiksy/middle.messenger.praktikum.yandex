import { Block } from "../../utils";
import "./messageSettingItem.css";
import template from "./messageSettingItem.hbs";

interface IMessageSettingItemProps {
	src: string;
	alt: string;
	settingName: string;
}

export class MessageSettingItem extends Block<IMessageSettingItemProps> {
	static componentName = 'MessageSettingItem';
	constructor({ src, alt, settingName }: IMessageSettingItemProps) {
		super({ src, alt, settingName });
	}
	protected render() {
		return template({ ...this.props });
	}
}
