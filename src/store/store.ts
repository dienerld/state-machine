import { defineStore } from "pinia";
import { StateMachine } from "./stateMachine";
import { IMessage, IModalContent } from "./types";

const data: IModalContent[] = [
	{
		id: "bergao",
		title: "Supermercado Bergão",
		body: "Content 1",
	},
	{
		id: "bh",
		title: "Supermercado BH",
		body: "Content 2",
	},
	{
		id: "esquinao",
		title: "Supermercado Esquinão",
		body: "Content 2",
	},
	{
		id: "adv1",
		title: "Advogados 1",
		body: "Content 3",
	},
	{
		id: "adv2",
		title: "Advogados 2",
		body: "Content 4",
	},
];

export const stateMachineStore = defineStore("stateMachine", {
	state: () => ({
		state: new StateMachine(),
		modal: {
			isOpen: false,
			content: {} as IModalContent,
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
		hidrateModal(target: string) {
			this.modal.content = data.find((item) => item.id === target)!;
		},
	},
});
