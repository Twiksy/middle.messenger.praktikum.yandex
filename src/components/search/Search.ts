import { Block } from "../../utils";
import "./search.css";
import template from "./search.hbs";
interface ISearch {
	addClass?: string;
}

export class Search extends Block<ISearch> {
	static componentName = 'Search';
	constructor({ addClass }: ISearch) {
		super({ addClass });
	}

	protected render(): string {
		return template({ ...this.props });
	}
}
