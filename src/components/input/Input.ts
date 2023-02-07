import { Block } from "../../utils";
import './input.css'
interface IInputProps {
	name: string;
	placeholder?: string;
	addClass?: string;
	type?: string;
	ref?: string;
	value?: string;
	readonly?: boolean;
	onChange?: () => void;
	onInput?: () => void;
	onBlur?: () => void;
	onFocus?: () => void;
	events?: Record<string, Record<string, (event: Event) => void> | unknown>;
}

export class Input extends Block<IInputProps> {
	static componentName = 'Input';
	constructor({
		name,
		placeholder,
		addClass,
		type,
		value,
		readonly,
		onChange,
		onBlur,
		onInput,
		onFocus,

	}: IInputProps) {
		super({
			name,
			placeholder,
			addClass,
			type,
			value,
			readonly,
			events: {
				change: onChange,
				input: onInput,
				blur: onBlur,
				focus: onFocus,
			},
		});
	}
	protected render(): string {
		return `<input
		class="input-block__input {{addClass}}"
		type="{{type}}"
		name="{{name}}"
		value="{{value}}"
		placeholder="{{placeholder}}"
		{{#if readonly}}
      readonly
    {{/if}}
	/>`;
	}
}
