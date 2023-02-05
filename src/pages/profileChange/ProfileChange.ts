import { Block } from "../../utils";
import { validate } from "../../helpers/validate";
import { fieldType, fieldsType } from "../../types/validateTypes";
export class ProfileChange extends Block {
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
        const fields: fieldsType = []
        inputs.forEach((inp) => {
          const input: HTMLInputElement = inp[1].querySelector('input')
          const errorText = validate(input)
          inp[1].dataset.error = errorText;
          if (errorText !== '') {
            errors += 1
          }
          const inpObj: fieldType = {}
          inpObj[input.name] = input.value
          fields.push(inpObj)
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
            <img class="fake-img" src="../../../static/fakeImg.png" alt="fake-img" />
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
