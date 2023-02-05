import { Block } from "../../utils";

export class LayoutAside extends Block {
	protected render(): string {
		return `
			<div class="messendger__wrapper">
				{{{Aside}}}
				<div class="messendger__chats-content" data-layout=1></div>
			</div>
    `;
	}
}
