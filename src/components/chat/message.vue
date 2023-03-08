<script setup lang="ts">
import { defineProps, onMounted } from "vue";

interface Props {
	text: string;
	isUserMessage?: boolean;
}
defineProps<Props>();

onMounted(() => {
});
</script>
<template>
	<div :class="[$style.container, { [$style.end]: isUserMessage }]">
		<span>{{ text }}</span>
	</div>
</template>
<style module lang="scss">
.container {
	display: flex;
	min-width: 130px;
	max-width: 40%;
	align-items: center;
	border-radius: 4px;
	background-color: #9578b2;

	span {
		color: #000;
		padding: 0.5rem;
	}

}

.end {
	align-self: flex-end;
}
</style>
