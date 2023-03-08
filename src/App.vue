<script setup lang="ts">
import Chat from './components/chat/containerMessage.vue'
</script>

<template>
	<div :class="$style.container">
		<Chat />
	</div>
</template>

<style module lang="scss">
.container {
	max-width: 1280px;
	width: 100%;
	max-height: 768px;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin: auto;
	padding: 2rem;
	text-align: center;

	box-sizing: border-box;
}
</style>
