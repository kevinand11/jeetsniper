<template>
	<div class="flex items-center px-4 py-4 lg:py-6 lg:px-8 gap-6 border-b border-b-gray-border">
		<img src="@/assets/images/logo.png" class="h-6 lg:h-8" />
		<div class="hidden lg:flex rounded-full mx-auto py-3 px-8 items-center gap-6 border border-gray">
			<LinkTag to="/" @clicked="openMenu = false">About</LinkTag>
			<LinkTag to="/" @clicked="openMenu = false">Tutorials</LinkTag>
			<LinkTag to="/" :external="true" @clicked="openMenu = false">Twitter</LinkTag>
			<LinkTag to="/" :external="true" @clicked="openMenu = false">Telegram</LinkTag>
		</div>
		<button class="bg-gradient ml-auto lg:ml-0">Start Trading</button>
		<a class="text-2xl leading-none lg:hidden" @click="openMenu = true">
			<i :class="PrimeIcons.ALIGN_RIGHT" />
		</a>
		<transition>
			<div v-if="openMenu" class="menu flex flex-col gap-6 bg-dark text-light">
				<a class="text-2xl ml-auto" @click="openMenu = false">
					<i :class="PrimeIcons.TIMES" />
				</a>
				<LinkTag to="/" @clicked="openMenu = false">About</LinkTag>
				<LinkTag to="/" @clicked="openMenu = false">Tutorials</LinkTag>
				<LinkTag to="/" :external="true" @clicked="openMenu = false">Twitter</LinkTag>
				<LinkTag to="/" :external="true" @clicked="openMenu = false">Telegram</LinkTag>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { PrimeIcons } from 'primevue/api'

const openMenu = ref(false)
</script>

<style scoped>
.menu {
	position: fixed;
	height: 100vh;
	width: 100vw;
	z-index: 10;
	top: 0;
	left: 0;
	padding: 60px;
}

.v-enter-active {
	transition: all 0.3s ease-out;
}

.v-enter-from {
	transform: translateX(200px);
}
</style>