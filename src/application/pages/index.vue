<template>
	<div class="flex flex-col bg">
		<div class="min-h-[60vh] lg:min-h-[50vh] flex flex-col" id="cta">
			<Navbar />
			<CTA  />
		</div>
		<Features class="mb-9 lg:mb-28" />
		<Footer />
	</div>
</template>

<style>
#cta {
	background-image: url('../assets/images/cta-bg.png');
	background-size: cover;
}
</style>