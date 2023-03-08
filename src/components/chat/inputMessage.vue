<script setup lang="ts">
import { defineProps } from "vue";
import { IAction } from '../../store/store'
interface Props {
	actions: IAction[]
}
defineProps<Props>();

const handleClick = () => {
	console.log("dsds")
}

</script>
<template>
	<div :class="$style.container">
		<button type="button" v-for="action in actions" :key="action.id" @click="handleClick">
			{{ action.label }}
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

	input {
		flex: 4;
		padding: 0.5rem;
		border-radius: 8px;
		border: 0;
		outline: none;

		&:focus {
			border: 1px solid #9d9d9d;
		}
	}

	button {
		flex: 1;
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
