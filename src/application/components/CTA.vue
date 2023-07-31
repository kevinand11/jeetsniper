<template>
	<div class="flex flex-col w-full justify-center lg:max-w-[1200px] mx-auto text-center items-center flex-grow gap-5 p-6">
		<div class="rounded-full px-3 py-1 flex items-center gap-2 bg-[#ffffff19]">
			<span>Join the $JEETS community</span>
			<span class="rounded-full py-1 px-2 bg-[#ffffff0d] flex items-center justify-center">
				<i :class="PrimeIcons.ARROW_RIGHT" />
			</span>
		</div>
		<h1 class="font-bold text-3xl lg:text-6xl">
			Unleash the Lightning-Quick<br />
			Telegram Trading Bot
		</h1>
		<div class="flex gap-5">
			<button class="border border-[#ffffff0f] flex items-center gap-2">
				Explore Features <i :class="PrimeIcons.ARROW_UP_RIGHT" />
			</button>
			<button class="bg-gradient">
				Start Trading
			</button>
		</div>
		<div class="flex flex-col lg:flex-row gap-y-3 gap-x-8">
			<span v-for="feature in features" :key="feature" class="uppercase flex items-center gap-2 text-sm">
				<i :class="PrimeIcons.CHECK" class="bg-gradient p-0.5 rounded-full" />
				<span>{{ feature }}</span>
			</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { PrimeIcons } from 'primevue/api'

const features = [
	'90% Revenue share',
	'insane transaction speed',
	'24/7 support'
]
</script>