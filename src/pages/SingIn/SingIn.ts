import { fieldType } from './../../types/validateTypes';
import { validate } from "../../helpers/validate";
import { Block } from "../../utils";
import { router } from "../../utils/Router/Router"
import { routesPaths } from '../../utils/Router/routesEnum';
import { LoginController } from '../../controllers/signUpControl';
import Store from '../../utils/Store/store'

export class SignIn extends Block {
  static componentName = 'SignIn';

  protected getStateFromProps() {
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
          const data = fields
          LoginController.login(fields);
          router.go(routesPaths.chats)
        }
      },
      onRegister: (e: Event) => {
        e.preventDefault()
        router.go(routesPaths.reg)
      },

      store: Store
    };
  }

  protected render(): string {
    return `
    <div class="form-container">
    <div class="form-container__block">
      <form action="">
        {{{Title tag="h2" text="SignIn" addClass="form-container__title"}}}
        <div class="form-container__fields">
          {{{InputBlock labelText="Login" name="login" placeholder=" " type="text" ref="loginInp" onBlur=onValidate onInput=onValidate}}}
          {{{InputBlock labelText="Password" name="password" type="password" placeholder=" " ref="passInp" onBlur=onValidate onInput=onValidate}}}
        </div>
        <div class="form-container__btns">
          {{{Button type="submit" textBtn="Sign in" onClick=onSubmit}}}
          {{{Button href="/" addClass="btn-reset" textBtn="Registrate" onClick=onRegister}}}
        </div>
      </form>
    </div>
  </div>  
    `;
  }
}
