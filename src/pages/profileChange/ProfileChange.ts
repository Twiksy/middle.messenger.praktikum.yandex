import { Block } from "../../utils";
import { validate } from "../../helpers/validate";
import { fieldType, fieldsType } from "../../types/validateTypes";
export class ProfileChange extends Block {
  static componentName = 'ProfileChange';
  protected getStateFromProps(): void {
    this.state = {
      onValidate: (e: Event) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        const errorText = validate(target);
        const parent = target.parentElement as HTMLElement
        parent.dataset.error = errorText;
      },
      onSubmit: (e: Event) => {
        e.preventDefault();
        const inputs = Object.entries(this.refs)

        let errors = 0;
        const fields: fieldType = {}
        inputs.forEach((inp) => {
          const input: HTMLInputElement = inp[1].querySelector('input')
          const errorText = validate(input)
          inp[1].dataset.error = errorText;
          if (errorText !== '') {
            errors += 1
          }

          fields[input.name] = input.value
        })
        if (errors === 0) {
          console.log(fields);
        }
      }
    };
  }

  protected render(): string {
    return `
    {{#LayoutAside}}
    <div class="messendger__profile profile">
    <div class="profile__content">
      <form action="">
        <div class="profile__top">
          <div class="profile__avatar">
            <input type="file" name="avatar" class="profile__avatar-input">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36 2H4C2.89543 2 2 2.89543 2 4V25.2667L14.6547 22.3139C15.5486 22.1053 16.4635 22 17.3814 22H22.6186C23.5365 22 24.4514 22.1053 25.3453 22.3139L38 25.2667V4C38 2.89543 37.1046 2 36 2ZM4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM10.9091 14.5455C12.9174 14.5455 14.5455 12.9174 14.5455 10.9091C14.5455 8.90079 12.9174 7.27273 10.9091 7.27273C8.90082 7.27273 7.27276 8.90079 7.27276 10.9091C7.27276 12.9174 8.90082 14.5455 10.9091 14.5455Z" fill="#CDCDCD"/></svg>
          </div>
        </div>
        <div class="profile__body">
          <div class="profile__fields">
            <div class="profile__row">
              {{{ProfileItem label="Email" ref="Email" type="text" value="pochta@yandex.ru" name="email" onBlur=onValidate onInput=onValidate }}}
            </div>
            <div class="profile__row">
              {{{ProfileItem label="Login" ref="Login" type="text" value="ivanivanov" name="login" onBlur=onValidate onInput=onValidate }}}
            </div>
            <div class="profile__row">
              {{{ProfileItem label="Name" ref="Name" type="text" value="Ivan" name="first_name" onBlur=onValidate onInput=onValidate }}}
            </div>
            <div class="profile__row">
              {{{ProfileItem label="Surname" ref="Surname" type="text" value="Ivanov" name="second_name" onBlur=onValidate onInput=onValidate }}}
            </div>
            <div class="profile__row">
              {{{ProfileItem label="Nickname" ref="Nickname" type="text" value="Ivanches" name="display_name" onBlur=onValidate onInput=onValidate }}}
            </div>
            <div class="profile__row">
              {{{ProfileItem label="Phone" ref="Phone" type="text" value="+79099673030" name="phone" onBlur=onValidate onInput=onValidate }}}
            </div>
          </div>
          <div class="profile__handle">
            {{{Button type="submit" textBtn='Save change' onClick=onSubmit }}}
          </div>
        </div>
      </form>
    </div>
  </div>
  {{/LayoutAside}}
    `;
  }
}
