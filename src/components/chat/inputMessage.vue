<script setup lang="ts">
import { defineProps } from "vue";
import { EStates, IAction, stateMachineStore } from '../../store'
interface Props {
	actions: IAction[]
}
defineProps<Props>();
const store = stateMachineStore();

const handleClick = (action: IAction) => {
	store.next(action.id)
	store.addHistory({
		id: action.id,
		label: action.label,
		isUser: true
	})
	if (store.state.state === EStates.STATE3) {
		store.hidrateModal(action.id)
		store.setIsOpenModal(true)

	}
}

</script>
<template>
	<div :class="$style.container">
		<button type="button" v-for="action in actions" :key="action.id" @click="handleClick(action)" class="btn">
			{{ action.label }}
		</button>
		<button v-if="store.state.state !== EStates.STATE1" type="button" @click="store.previous" class="btn">
			Voltar
		</button>

	</div>
</template>
<style module lang="scss">
.container {
	width: 100%;
	height: 100%;
	display: flex;
	gap: 0.5rem;

	margin-top: 1rem;

	button {
		flex: 4;
		padding: 0.5rem;
		border-radius: 8px;
		border: 0;
		outline: none;

	}

	button {
		padding: 0.5rem;
		font-weight: bold;
		line-height: 1.4;
		border-radius: 8px;

		border: 0;
		outline: none;
		cursor: pointer;

		&:hover {
			border: 0;
		}
	}
}
</style>
