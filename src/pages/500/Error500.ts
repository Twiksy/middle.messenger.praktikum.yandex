import {Block} from "../../utils";
export class Error500 extends Block {
	protected render(): string {
		return `
    <section class="error-page">
	    <div class="error-page__content">
	    	{{{ Title text="500" addClass="error-page__code"}}}
	    	<p class="error-page__descr">Мы уже фиксим</p>
	    	<a href="/" class="error-page__link">
	    		Back to page
	    	</a>
	    </div>
    </section>
    `;
	}
}
