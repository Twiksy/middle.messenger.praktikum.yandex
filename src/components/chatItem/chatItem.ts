import { Block } from "../../utils";
import './chatItem.css';

export interface IChatItem {
	chatName: string;
	chatPreview: string;
	lastTime: string;
	addClass?: string;
	src?: string;
	notification?: string;
	isYour?: boolean;
}
export class ChatItem extends Block {
	constructor({
		addClass,
		src,
		chatName,
		chatPreview,
		notification,
		lastTime,
		isYour,
	}: IChatItem) {
		super({
			addClass,
			src,
			chatName,
			chatPreview,
			notification,
			lastTime,
			isYour,
		});
	}

	protected render(): string {
		return `
    <div class="chat-item {{addClass}}">
    <div class="chat-item__wrapper">
      <div class="chat-item__photo">
        {{#if src}}
          <img src="{{src}}" alt="user photo" />
        {{else}}
          <span class="chat-item__photo-fake"></span>
        {{/if}}
      </div>
      <div class="chat-item__content">
        <div class="chat-item__name">{{chatName}}</div>
        <div class="chat-item__preview">
          {{#if isYour}}
            <span class="you-prefix">Вы:</span>{{chatPreview}}
          {{else}}
            {{chatPreview}}
          {{/if}}
          {{#if notification}}
            <span class="messages-notification">{{notification}}</span>
          {{/if}}
          <time class="chat-item__date">{{lastTime}}</time>
        </div>
      </div>
    </div>
  </div>
    `;
	}
}
