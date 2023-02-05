import { Block } from "../../utils";

export class OpenedChat extends Block {
  protected render(): string {
    return `
    {{#LayoutChat}}
    <div class="messendger__content">
    {{{Messageheader userName="Name"}}}
    <div class="messendger__content-messages chat-messages">
        <div class="chat-messages__body">
          <div class="chat-messages__row">
    				<div class="chat-messages__date">19 june</div>
          </div>
          <div class="chat-messages__row">
    				<div class="chat-messages__message">
              <div class="chat-messages__message-text">
                <p> Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.</p>
                <br />
                <br />
                <p>Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>
              </div>
              <time class="chat-messages__message-time">
                11:56
              </time>
            </div>
          </div>
          <div class="chat-messages__row">
    				<div class="chat-messages__message chat-messages__message_media">
              <div class="chat-messages__message-img">
                <img src="../../../static/chatImg.png" alt="media img">
              </div>
              <time class="chat-messages__message-time">
                11:56
              </time>
            </div>
          </div>
          <div class="chat-messages__row">
    				<div class="chat-messages__message chat-messages__message_your">
              Круто! 
              <time class="chat-messages__message-time readed">
                11:56
              </time>
            </div>
          </div>
        </div>
			</div>
			{{{Messagehandle}}}
	</div>
  {{/LayoutChat}}
    `;
  }
}
