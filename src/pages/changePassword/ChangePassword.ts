import { Block } from "../../utils";

export class ChangePassword extends Block {
  static componentName = 'ChangePassword';
  protected render(): string {
    return `
    <div class="messendger__profile profile">
      <div class="profile__content">
        <form action="">
          <div class="profile__top">
            <div class="profile__avatar">
              <input type="file" name="avatar" class="profile__avatar-input">
              <img class="fake-img" src="../../../static/fakeImg.png" alt="fake img" />
				    </div>
          </div>
          <div class="profile__body">
            <div class="profile__fields">
              <div class="profile__row">
              {{{ProfileItem label="Old password" value="pochta@yandex.ru" name="oldPassword" type="password"}}}
              </div>
              <div class="profile__row">
              {{{ProfileItem label="New password" value="12345678" name="newPassword" type="password" }}}
              </div>
              <div class="profile__row">
                {{{ProfileItem label="Repeat new password" value="12345678" name="newPassword_repeat" type="password" }}}
              </div>
            </div>
            <div class="profile__handle">
              {{{Button type="submit" textBtn='Save change'}}}
            </div>
          </div>
        </form>
      </div>
    </div>
	
    `;
  }
}
