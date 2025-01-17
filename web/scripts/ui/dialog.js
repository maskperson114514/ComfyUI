import { $el } from "../ui.js";

export class ccniyDialog {
	constructor() {
		this.element = $el("div.ccniy-modal", { parent: document.body }, [
			$el("div.ccniy-modal-content", [$el("p", { $: (p) => (this.textElement = p) }), ...this.createButtons()]),
		]);
	}

	createButtons() {
		return [
			$el("button", {
				type: "button",
				textContent: "Close",
				onclick: () => this.close(),
			}),
		];
	}

	close() {
		this.element.style.display = "none";
	}

	show(html) {
		if (typeof html === "string") {
			this.textElement.innerHTML = html;
		} else {
			this.textElement.replaceChildren(html);
		}
		this.element.style.display = "flex";
	}
}
