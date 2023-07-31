<template>
	<footer>
		<div class="flex flex-col gap-10 lg:gap-14 w-full lg:w-[1200px] mx-auto">
			<div class="flex flex-col lg:flex-row gap-8">
				<div class="flex-grow">
					<img src="@/assets/images/logo.png" class="h-[30px] lg:h-[52px]" />
				</div>
				<div class="flex-grow flex">
					<div class="flex flex-col flex-grow gap-4">
						<h4>Quick Links</h4>
						<a class="footer-link">Telegram Bot</a>
						<a class="footer-link">Buy $JEETS</a>
						<a class="footer-link">Telegram Group</a>
						<a class="footer-link">Twitter</a>
						<a class="footer-link">Contact Us</a>
					</div>
					<div class="flex flex-col flex-grow gap-4">
						<h4>Resources</h4>
						<a class="footer-link">Docs</a>
						<a class="footer-link">Token Chart</a>
						<a class="footer-link">Whitepaper</a>
					</div>
				</div>
			</div>
			<div class="h-1 bg-gray-border hidden lg:block"></div>
			<div class="flex flex-col lg:flex-row gap-20 w-full">
				<div class="flex flex-col lg:flex-row gap-2 lg:gap-4">
					<a class="footer-link">Privacy Policy</a>
					<span class="footer-link !text-[4px]">
						<i :class="PrimeIcons.CIRCLE_FILL" />
					</span>
					<a class="footer-link">Terms of Conditions</a>
				</div>
				<div class="flex justify-center lg:justify-end">
					<a class="footer-link">JeetSniper. All rights reserved.</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup>
import { PrimeIcons } from 'primevue/api'
</script>