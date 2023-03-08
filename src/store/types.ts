export enum EStates {
	OFF = "OFF",
	STATE1 = "STATE1",
	STATE2 = "STATE2",
	STATE3 = "STATE3",
}

export interface IMessage {
	id: string;
	label: string;
	isUser: boolean;
}

export interface IAction {
	id: string;
	label: string;
}
