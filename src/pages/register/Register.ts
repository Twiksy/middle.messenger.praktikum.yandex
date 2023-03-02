import { fieldType, fieldsType } from './../../types/validateTypes';
import { validate } from "../../helpers/validate";
import { Block } from "../../utils";
import { router } from "../../utils/Router/Router"
import { routesPaths } from '../../utils/Router/routesEnum';
import { HTTPTransport } from '../../utils/Fetch';
import authController from '../../controllers/auth-controller';
import { SignUpController } from '../../controllers/signUpControl';

export class Register extends Block {
  static componentName = 'Register';
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
          console.log(fields);

          SignUpController.signUp(fields);
          // router.go(routesPaths.chats)
        }
      },
      onSignIn: (e: Event) => {
        e.preventDefault()
        router.go(routesPaths.sign)
      },

    };
  }
  _componentDidMount() {
    console.log(this.refs.emailInp);
  }
  protected render(): string {
    return `
    <div class="form-container">
    <div class="form-container__block">
      <form action="">
        {{{Title tag="h2" text="Register" addClass="form-container__title"}}}
        <div class="form-container__fields">
        {{{InputBlock labelText="Name"  name="first_name" placeholder=" " type="text" ref="firstNameInp" onBlur=onValidate onInput=onValidate}}}
        {{{InputBlock labelText="Surname" name="second_name" placeholder=" " type="text" ref="surnameInp" onBlur=onValidate onInput=onValidate}}}
        {{{InputBlock labelText="Login" name="login" placeholder=" " type="text" ref="loginInp" onBlur=onValidate onInput=onValidate}}}
          {{{InputBlock labelText="Email" name="email" placeholder=" " type="text" ref="emailInp" onBlur=onValidate onInput=onValidate}}}
          {{{InputBlock labelText="Password" name="password" type="password" placeholder=" " ref="passInp" onBlur=onValidate onInput=onValidate}}}
          {{{InputBlock labelText="Phone" name="phone" type="text" placeholder=" " ref="phone" onBlur=onValidate onInput=onValidate}}}
        </div>
        <div class="form-container__btns">
          {{{Button type="submit" textBtn="Register" onClick=onSubmit}}}
          {{{Button href="/" addClass="btn-reset" textBtn="Sign in" onClick=onSignIn}}}
        </div>
      </form>
    </div>
  </div>  
    `;
  }
}
