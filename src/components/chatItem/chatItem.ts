import { Block } from "../../utils";
import './chatItem.css';



interface IChatBlock {
	addClass?: string,
	isYour?: boolean,
	avatar: string,
	chatPreview: string,
	title: string,
	time: string,
	unread_count: number
}
export class ChatItem extends Block<IChatBlock> {
	static componentName = 'ChatItem';
	constructor({
		addClass,
		avatar,
		title,
		chatPreview,
		isYour,
		time,
		unread_count,
	}: IChatBlock) {
		super({
			addClass,
			avatar,
			title,
			chatPreview,
			isYour,
			time,
			unread_count,
		});
	}

	protected render(): string {
		return `
    <div class="chat-item {{addClass}}">
    <div class="chat-item__wrapper">
      <div class="chat-item__photo">
        {{#if avatar}}
          <img src="{{avatar}}" alt="user photo" />
        {{else}}
          <span class="chat-item__photo-fake"></span>
        {{/if}}
      </div>
      <div class="chat-item__content">
        <div class="chat-item__name">{{title}}</div>
        <div class="chat-item__preview">
          {{#if isYour}}
            <span class="you-prefix">Вы:</span>{{chatPreview}}
          {{else}}
            {{chatPreview}}
          {{/if}}
          {{#if notification}}
            <span class="messages-notification">{{unread_count}}</span>
          {{/if}}
          <time class="chat-item__date">{{time}}</time>
        </div>
      </div>
    </div>
  </div>
    `;
	}
}
