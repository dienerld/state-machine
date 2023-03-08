<script setup lang="ts">
import Message from "./message.vue";
import InputMessage from "./inputMessage.vue";
import { stateMachineStore, EStates } from '../../store/store'

const stateMachine = stateMachineStore();
</script>
<template>
	<div :class="$style.container">
		<!-- <Message v-for="message in stateMachine.history" :text="message.label" :id="message.id" /> -->

		<button v-if="stateMachine.state == EStates.OFF" type="button" :class="$style['start-chat']"
			@click="stateMachine.start">
			startChat
		</button>

		<template v-else>
			<Message :text="stateMachine.message.label" :id="stateMachine.message.id" />
			<InputMessage :actions="stateMachine.actions" />
		</template>
	</div>
</template>
<style module lang="scss">
.container {
	width: 60%;
	min-width: 300px;
	height: 80%;
	max-height: 500px;

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

	.start-chat {
		width: 100%;
		height: 100%;
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
}
</style>
