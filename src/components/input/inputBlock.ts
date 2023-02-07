import { Block } from "../../utils";
import "./input.css";
interface IInputProps {

	labelText: string;
	name: string;
	placeholder?: string;
	addClass?: string;
	type?: string;
	ref?: string;
	onChange?: () => void;
	onInput?: () => void;
	onBlur?: () => void;
	onFocus?: () => void;
}

export class InputBlock extends Block<IInputProps> {
	static componentName = 'InputBlock';
	constructor({
		labelText,
		name,
		placeholder,
		addClass,
		type,
		ref,
		onChange,
		onBlur,
		onInput,
		onFocus,
	}: IInputProps) {
		super({
			labelText,
			name,
			placeholder,
			addClass,
			type,
			ref,
			onChange,
			onInput,
			onBlur,
			onFocus,
		});
	}
	protected render(): string {
		return `
    <div class="input-block {{{addClass}}}">
	    <label class="input-block__label">{{labelText}}</label>
	    {{{Input
	    	class="input-block__input"
	    	type="{{type}}"
	    	name="{{name}}"
        placeholder="{{placeholder}}"
				ref="{{ref}}"
        onChange=onChange
        onInput=onInput
        onBlur=onBlur
        onFocus=onFocus
      }}}
      <div class="input-block__error"></div>
    </div>`;
	}
}
