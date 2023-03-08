import { defineStore } from "pinia";
import { StateMachine } from "./stateMachine";
import { IAction, IMessage } from "./types";

export const stateMachineStore = defineStore("stateMachine", {
	state: () => ({
		state: new StateMachine(),
		modal: {
			isOpen: false,
		},
	}),
	actions: {
		start() {
			this.state.start();
		},
		addHistory(action: IMessage) {
			this.state.addHistory(action);
		},
		next(id: string) {
			this.state.next(id);
		},
		previous() {
			this.state.previous();
		},
		setIsOpenModal(value: boolean) {
			this.modal.isOpen = value;
		},
	},
});
