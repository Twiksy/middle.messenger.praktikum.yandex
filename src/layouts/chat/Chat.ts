import { TPropsDefault } from './../../types/Interfaces';
import { IChatItem } from "../../types/Interfaces";
import { Block } from "../../utils";



interface ILayoutProps {
	chats: Array<IChatItem> | [],
}

export class LayoutChat extends Block<ILayoutProps> {
	static componentName = 'LayoutChat';

	constructor(props: ILayoutProps) {
		super(props)
		this.setProps({
			chats: this.props.store,
		});
	}


	protected render(): string {
		console.log(this.props);

		const chats = [this.props]


		const chatsItems = chats.map((el) => {
			let time = null
			// 	if (el.last_message) {
			// 		time = new Date(el.last_message.time).toLocaleTimeString()
			// 	}
			// 	return `<li class="messendger__chats-elem">
			// 	{{{ChatItem title="${el.title}" chatPreview="${el.last_message?.content}" 
			// 	src="${el.last_message?.user.avatar ? el.last_message?.user.avatar : ""}" 
			// 	unread_count="${el.unread_count ? el.unread_count : ""}"
			// 	time="${time}" }}}
			// </li>`
		})
		return `
			<div class="messendger__wrapper">
				{{{Aside}}}
					<div class="messendger__chats">
					{{{Search addClass="messendger__chats-search"}}}
					<ul class="messendger__chats-list">
					${chatsItems.join("")}
					</ul>
				</div>
				<div class="messendger__chats-content" data-layout=1></div>
			</div>
    `;
	}
}

