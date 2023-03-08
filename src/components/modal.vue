<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import {
	Dialog,
	DialogPanel,
	DialogTitle,
	DialogDescription,
} from '@headlessui/vue'
import { stateMachineStore } from '../store';

const store = stateMachineStore();
const modal = reactive(store.modal)


onMounted(() => {
	if (!modal?.content?.id) {
		alert('Nenhum dado disponível')
		store.setIsOpenModal(false)
		store.previous()
	}
})


const closeModal = () => {
	store.setIsOpenModal(false)
	store.state.previous()
}
</script>

<template>
	<Dialog :open="modal.isOpen" @close="closeModal" class="relative z-50 text-black">
		<div class="fixed inset-0 flex items-center justify-center p-4">

			<DialogPanel class="w-full max-w-sm rounded-md bg-white p-4">
				<DialogTitle :class="$style.dialogTitle">{{ modal.content.title }}</DialogTitle>
				<DialogDescription :class="$style.DialogDescription">
					Breve descrição
				</DialogDescription>

				<div class="flex flex-1 mt-4 gap-4 flex-col">
					<p>{{ modal.content.body }}</p>

					<div :class="$style.wrapperButtons">
						<button @click="">
							<a href="#"> Saber Mais</a></button>
						<button @click="closeModal">Voltar</button>
					</div>
				</div>
			</DialogPanel>
		</div>
	</Dialog>
</template>


<style module lang="scss">
.dialog {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.dialogPanel {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	height: 300px;
	background-color: #614d4d;
	border-radius: 8px;
	padding: 1rem;
}

.dialogTitle {
	color: #000;
	font-size: 1.5rem;
}

.DialogDescription {
	color: #b31818;
	font-size: 1.2rem;
}

.wrapperButtons {
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	button {
		width: 100px;
		height: 40px;
		border-radius: 8px;
		border: 0;
		outline: none;
		background-color: #b31818;
		color: #fff;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
	}
}
</style>
