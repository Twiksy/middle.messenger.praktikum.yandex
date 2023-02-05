import { validate } from "../../helpers/validate";
import { fieldType, fieldsType } from "../../types/validateTypes";
import { Block } from "../../utils";
export class SignInPage extends Block {
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
          const input = inp[1].querySelector('input')
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
    <div class="form-container">
    <div class="form-container__block">
      <form action="">
        {{{Title tag="h2" text="Sign In" addClass="form-container__title"}}}
        <div class="form-container__fields">
          {{{InputBlock name="login" labelText="Login" placeholder=" " type="text" ref="loginInp" onBlur=onValidate onInput=onValidate}}}
          {{{InputBlock name="password" labelText="Password" type="password" placeholder=" " ref="passInp" onBlur=onValidate onInput=onValidate}}}
        </div>
        <div class="form-container__btns">
          {{{Button type="submit" textBtn="Enter" onClick=onSubmit}}}
          {{{Button href="/" addClass="btn-reset" textBtn="Create account"}}}
        </div>
      </form>
    </div>
  </div>  
    `;
  }
}
