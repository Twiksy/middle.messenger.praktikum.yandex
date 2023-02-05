import { Block } from "../../utils";
import "./profileItem.css";

interface IProfileItem {
	label: string;
	value: string;
	name: string;
	type?: string;
	readonly?: boolean;
	onChange?: () => void;
	onInput?: () => void;
	onBlur?: () => void;
	onFocus?: () => void;
}

export class ProfileItem extends Block {
	static componentName = 'ProfileItem';
	constructor({ label, value, type, name, readonly, onChange,
		onInput,
		onBlur,
		onFocus, }: IProfileItem) {
		super({
			label, value, type, name, readonly, onChange,
			onInput,
			onBlur,
			onFocus,
		});
	}
	protected render() {
		return `
		<div class="profile-item">
  <div class="profile-item__wrapper">
    <div class="profile-item__label">
      {{label}}
    </div>
		{{{Input 
			value="{{value}}"
			type="{{type}}"
			name="{{name}}"
			addClass="profile-item__input"
			readonly=readonly
			onChange=onChange
			onInput=onInput
			onBlur=onBlur
			onFocus=onFocus
			}}}
  </div>
</div>

		`;
	}
}
