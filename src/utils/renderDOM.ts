import Block from "./Block";

export default function renderDOM(query = 'app', block: Block) {
	const root = document.getElementById(query);
	root!.innerHTML = "";
	root!.appendChild(block.getContent());
}

export function renderRemove(query = 'app') {
	const root = document.getElementById(query) as HTMLElement
	while (root.firstChild) {
		root.removeChild(root.firstChild);
	}
}
