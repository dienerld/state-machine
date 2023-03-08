<script setup lang="ts">
import Message from "./message.vue";
import InputMessage from "./inputMessage.vue";
import Modal from "../modal.vue";
import { stateMachineStore, EStates } from '../../store'
import { reactive } from "vue";

const store = stateMachineStore();
const stateMachine = reactive(store.state)
</script>
<template>
	<div :class="$style.container">
		<Message v-for="message in stateMachine.history" :text="message.label" :id="message.id" :is-user="message.isUser" />

		<button v-if="stateMachine.state == EStates.OFF" type="button"
		:class="[$style.startChat, 'bg-slate-600']"
			@click="stateMachine.start">
			startChat
		</button>

		<template v-else>
			<Message :text="stateMachine.message.label" :id="stateMachine.message.id" />
			<div :class="$style.wrapperButtons">

				<InputMessage :actions="stateMachine.actions" />
			</div>
		</template>
	</div>

	<Modal />
</template>
<style module lang="scss">
.container {
	width: 60%;
	min-width: 500px;
	height: 80%;

	overflow-x: hidden;
	overflow-y: auto;

	box-sizing: border-box;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	flex: 1;
	gap: 0.5rem;

	background-color: #ccc;
	border-radius: 8px;

	.startChat {
		width: 100%;
		height: 4rem;
		align-self: center;
		justify-self: center;
		padding: 1rem;
		border-radius: 10px;

		border: 0;
		cursor: pointer;

		&:hover {
			background-color: #adadad;
		}
	}

	.wrapperButtons {
		width: 100%;
		max-height: 96px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
	}
}
</style>
