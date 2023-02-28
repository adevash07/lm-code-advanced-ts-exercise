import { states } from "./states";

export class State {
	#state: keyof typeof states = states.MENU;

	get() {
		return this.#state;
	}

	set(newState: keyof typeof states) {
		this.#state = newState;
	}
}
