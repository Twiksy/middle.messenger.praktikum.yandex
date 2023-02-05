import {Block} from "../../utils";
export class Modals extends Block {
	protected render(): string {
		return `
    <div class="modals">
    <div class="modal">
      <div class="modal__title">Add user</div>
      <div class="modal__body">
      {{{Input name="login" labelText="Login" placeholder=""}}}
        
      </div>
      <div class="modal__footer">
        {{{Button textBtn="Add user"}}}
      </div>
    </div>
    <div class="modal">
      <div class="modal__title">Delete user</div>
      <div class="modal__body">
        {{{Input name="login" labelText="Login" placeholder=""}}}
      </div>
      <div class="modal__footer">
        {{{Button textBtn="Delete user"}}}
      </div>
    </div>
  </div>
    `;
	}
}
