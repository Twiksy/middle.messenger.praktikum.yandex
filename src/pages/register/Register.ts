import { fieldType, fieldsType } from './../../types/validateTypes';
import { validate } from "../../helpers/validate";
import { Block } from "../../utils";


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
          {{{InputBlock labelText="Email" name="email" placeholder=" " type="text" ref="emailInp" onBlur=onValidate onInput=onValidate}}}
          {{{InputBlock labelText="Login" name="login" placeholder=" " type="text" ref="loginInp" onBlur=onValidate onInput=onValidate}}}
          {{{InputBlock labelText="Name" name="first_name" placeholder=" " type="text" ref="firstNameInp" onBlur=onValidate onInput=onValidate}}}
          {{{InputBlock labelText="Surname" name="second_name" placeholder=" " type="text" ref="surnameInp" onBlur=onValidate onInput=onValidate}}}
          {{{InputBlock labelText="Password" name="password" type="password" placeholder=" " ref="passInp" onBlur=onValidate onInput=onValidate}}}
          {{{InputBlock labelText="Confirm Password" name="password_confirm" type="password" placeholder=" " ref="confirmPassInp" onBlur=onValidate onInput=onValidate}}}
        </div>
        <div class="form-container__btns">
          {{{Button type="submit" textBtn="Register" onClick=onSubmit}}}
          {{{Button href="/" addClass="btn-reset" textBtn="Sign in"}}}
        </div>
      </form>
    </div>
  </div>  
    `;
  }
}
