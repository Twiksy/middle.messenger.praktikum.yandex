import { Block } from "../../utils";
export class ErrorPage extends Block {
  static componentName = 'ErrorPage';
  protected render(): string {
    return `
    <section class="error-page">
    <div class="error-page__content">
      {{{Title text="404" addClass="error-page__code"}}}
      <p class="error-page__descr">Не туда попали</p>
      <a href="/" class="error-page__link">
        Back to page
      </a>
    </div>
  </section> 
    `;
  }
}
