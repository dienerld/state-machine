<script setup lang="ts">
import { defineProps, onMounted } from "vue";

interface Props {
	text: string;
	isUser?: boolean;
}
defineProps<Props>();

</script>
<template>
	<div :class="[$style.container, { [$style.right]: isUser }]">
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

.right {
	align-self: flex-end;
}
</style>
