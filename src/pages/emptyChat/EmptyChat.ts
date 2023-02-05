import { Block } from "../../utils";

export class EmptyChat extends Block {
  static componentName = 'EmptyChat';
  protected render(): string {
    return `
	  {{#LayoutChat}}
    <div class="messandger-content messandger-content_empty">
      <div class="messandger-content__description">
        <p>Select a chat to send a message</p>
      </div>
    </div>
    {{/LayoutChat }}
    `;
  }
}
