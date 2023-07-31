<template>
	<div class="flex flex-col bg">
		<div class="min-h-[60vh] lg:min-h-[50vh] flex flex-col" id="cta">
			<Navbar />
			<CTA  />
		</div>
		<Features />
		<Footer />
	</div>
</template>

<style>
#cta {
	background-image: url('../assets/images/cta-bg.png');
	background-size: cover;
}
</style>