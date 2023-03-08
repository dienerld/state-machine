import { defineStore } from "pinia";

export enum EStates {
	OFF = "OFF",
	STATE1 = "STATE1",
	STATE2 = "STATE2",
	STATE3 = "STATE3",
}

interface IMessage {
	id: string;
	label: string;
}

export interface IAction {
	id: string;
	label: string;
}

class StateMachine {
	state: EStates;
	message!: IMessage;
	actions!: IAction[];

	constructor() {
		this.state = EStates.STATE1;
	}

	start() {
		this.state = EStates.STATE1;
	}

	next() {
		switch (this.state) {
			case EStates.STATE1:
				this.state = EStates.STATE2;
				break;
			case EStates.STATE2:
				this.state = EStates.STATE3;
				break;
			case EStates.STATE3:
				this.state = EStates.STATE1;
				break;
		}
	}

	previous() {
		switch (this.state) {
			case EStates.STATE1:
				this.state = EStates.STATE3;
				break;
			case EStates.STATE2:
				this.state = EStates.STATE1;
				break;
			case EStates.STATE3:
				this.state = EStates.STATE2;
				break;
		}
	}
}

export const stateMachineStore = defineStore("stateMachine", {
	state: () => new StateMachine(),

	actions: {
		start() {
			this.start();
		},
		next() {
			this.next();
		},
		previous() {
			this.previous();
		},
	},
});
