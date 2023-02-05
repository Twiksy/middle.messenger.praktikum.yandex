import { IChatItem } from "./../../components/chatItem/chatItem";
import { Block } from "../../utils";

type IChats = Array<IChatItem>;

const chats: IChats = [
	{
		chatName: "Max",
		chatPreview: "lorem ipsum",
		lastTime: "11.11",
	},
	{
		chatName: "Max",
		chatPreview: "lorem ipsum",
		lastTime: "11.11",
	},
	{
		chatName: "Max",
		chatPreview: "lorem ipsum",
		lastTime: "11.11",
	},
	{
		chatName: "Max",
		chatPreview: "lorem ipsum",
		lastTime: "11.11",
		notification: "11",
		isYour: true,
	},
];

export class LayoutChat extends Block<ILayoutChatProps> {
	protected render(): string {
		const chatsItems = chats.map((el) => {
			return `<li class="messendger__chats-elem">
			{{{ChatItem chatName="${el.chatName}" chatPreview="${el.chatPreview}" 
			src="${el.src ? el.src : ""}" 
			isYour="${el.isYour ? true : ""}"
			notification="${el.notification ? el.notification : ""}"
			lastTime="${el.lastTime}" }}}
		</li>`})
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
