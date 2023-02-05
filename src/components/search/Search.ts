import { Block } from "../../utils";
import "./search.css";
import template from "./search.hbs";
interface ISearch {
	addClass?: string;
	lupeIcon: string;
}

export class Search extends Block {
	constructor({ addClass }: ISearch) {
		super({ addClass });
	}

	protected render(): string {
		return template({ ...this.props });
	}
}
