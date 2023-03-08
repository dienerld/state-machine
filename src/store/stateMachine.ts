import { EStates, IAction, IMessage } from "./types";

const data = [
	{
		id: "supermarkets",
		label: "Supermercados",
		actions: [
			{
				id: "bh",
				label: "BH",
			},
			{
				id: "bergao",
				label: "Bergão",
			},
			{
				id: "esquinao",
				label: "Esquinão",
			},
		],
	},
	{
		id: "hospital",
		label: "Hospital",
		actions: [
			{
				id: "loja 1",
				label: "Loja 1",
			},
			{
				id: "loja 2",
				label: "Loja 2",
			},
			{
				id: "loja 3",
				label: "Loja 3",
			},
		],
	},
	{
		id: "office",
		label: "Escritórios",
		actions: [
			{
				id: "adv1",
				label: "Advogados 1",
			},
			{
				id: "adv2",
				label: "Advogados 2",
			},
			{
				id: "loja 3",
				label: "Loja 3",
			},
		],
	},
	{
		id: "furniture",
		label: "Loja de Moveis",
		actions: [
			{
				id: "loja 1",
				label: "Loja 1",
			},
			{
				id: "loja 2",
				label: "Loja 2",
			},
		],
	},
];

export class StateMachine {
	state: EStates;
	message: IMessage;
	actions: IAction[];
	history: IMessage[];
	lastActions: IAction[];

	constructor() {
		this.state = EStates.OFF;
		this.message = {
			id: "start",
			label: `Bem-vindo!! Qual setor deseja?`,
			isUser: false,
		};
		this.history = [];
		this.actions = [];
		this.lastActions = [];
	}

	start() {
		this.history.push({
			id: "start",
			label: "Iniciar",
			isUser: true,
		});
		this.state = EStates.STATE1;
		this.actions = data;
	}

	next(target: string) {
		switch (this.state) {
			case EStates.STATE1:
				this.state = EStates.STATE2;
				this.lastActions = this.actions;
				this.actions = data.find((item) => item.id === target)?.actions || [];
				break;
			case EStates.STATE2:
				this.state = EStates.STATE3;
				this.lastActions = this.actions;
				this.actions = [];
				break;
		}
		console.log(this.state);
	}

	previous() {
		switch (this.state) {
			case EStates.STATE2:
				this.state = EStates.STATE1;
				this.actions = data;
				this.addHistory({
					id: "previous",
					label: "Voltar",
					isUser: true,
				});
				break;
			case EStates.STATE3:
				this.state = EStates.STATE2;
				this.actions = this.lastActions;
				break;
		}
		console.log(this.state);
	}

	addHistory(action: IMessage) {
		this.history.push({
			id: this.message.id,
			label: this.message.label,
			isUser: false,
		});
		this.history.push({
			id: action.id,
			label: action.label,
			isUser: action.isUser,
		});
	}
}
