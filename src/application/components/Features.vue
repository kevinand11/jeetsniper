<template>
	<div class="w-full lg:max-w-[1200px] mx-auto flex flex-col py-8 lg:py-24 px-6 items-center text-center">
		<h2 class="font-bold text-2xl lg:text-4xl mb-3 lg:mb-7">
			Unlike Any Bot<br />
			You’ve Used Before
		</h2>
		<span class="text-gray-dark w-4/5 lg:w-1/2 mb-10 lg:mb-16">
			With JeetSniper's cutting-edge Sniping Bot, you can strike with precision and claim those juicy tokens before anyone else even blinks.
		</span>
		<div class="w-full grid gap-4 lg:gap-6 grid-cols-6 mb-8 lg:mb-16">
			<div class="col-span-6 lg:col-span-4 grid-items flex flex-col items-center justify-center gap-2">
				<h1 class="font-bold text-[32px] lg:text-[96px]">
					$300,000+
				</h1>
				<span class="text-gray-dark lg:text-2xl">Predicted Trading Volume</span>
			</div>
			<div class="col-span-3 lg:col-span-2 grid-items flex flex-col justify-center items-center gap-4">
				<img src="@/assets/images/lightning.svg" class="h-[160px] lg:h-[230px]" />
				<h2 class="font-bold text-2xl lg:text-3xl">
					10X Faster
				</h2>
				<span class="text-xs lg:text-base">Than trading on Uniswap</span>
			</div>
			<div class="col-span-3 lg:col-span-2 grid-items flex flex-col justify-center items-center gap-4">
				<img src="@/assets/images/dash.svg" class="h-[180px] lg:h-[300px]" />
				<h2 class="font-bold text-2xl lg:text-3xl">
					$0
				</h2>
				<span class="text-xs lg:text-base">Revenue Share Distributed</span>
			</div>
			<div class="col-span-6 lg:col-span-4 grid-items flex flex-col justify-center items-center gap-2">
				<h2 class="font-bold text-2xl lg:text-3xl mt-5">
					Unparalleled Accuracy
				</h2>
				<span class="text-xs lg:text-base">
					Trust the battle-tested prowess of JeetSniper! Our bot's algorithms are fine-tuned to provide you with unparalleled accuracy in tracking token movements and identifying potential winners. Arm yourself with data-driven knowledge and obliterate the competition!
				</span>
				<img src="@/assets/images/feats.svg" class="flex-grow" />
			</div>
		</div>
		<div class="w-full grid gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-2 text-center relative">
			<div class="w-full p-6 flex flex-col justify-center items-center min-h-[160px] lg:min-h-[220px] gap-4">
				<img src="@/assets/images/Bulb.svg" class="h-10 w-10" alt="" />
				<h3 class="font-bold text-base">Warp-Speed Trades</h3>
				<span class="text-gray max-w-[80%]">
					Experience Transactions at the Speed of Light, No Lag, No Waiting – Just Lightning Efficiency
				</span>
			</div>
			<div class="w-full p-6 flex flex-col justify-center items-center min-h-[160px] lg:min-h-[220px] gap-4">
				<img src="@/assets/images/Trending_Up.svg" class="h-10 w-10" alt="" />
				<h3 class="font-bold text-base">Discover New Tokens on Multiple Blockchains</h3>
				<span class="text-gray max-w-[80%]">
					Dive into the Boundless Depths of the Crypto Universe and Unravel a Multitude of Thrilling Token Possibilities!
				</span>
			</div>
			<div class="w-full p-6 flex flex-col justify-center items-center min-h-[160px] lg:min-h-[220px] gap-4">
				<img src="@/assets/images/Compass.svg" class="h-10 w-10" alt="" />
				<h3 class="font-bold text-base">High Revenue Shares</h3>
				<span class="text-gray max-w-[80%]">
					Say goodbye to the norm and brace yourself for an epic journey into the realm of limitless prosperity
				</span>
			</div>
			<div class="w-full p-6 flex flex-col justify-center items-center min-h-[160px] lg:min-h-[220px] gap-4">
				<img src="@/assets/images/Checkbox.svg" class="h-10 w-10" alt="" />
				<h3 class="font-bold text-base">Unparalleled Accuracy</h3>
				<span class="text-gray max-w-[80%]">
					Our cutting-edge technology ensures you receive accurate insights and real-time data on token movements and market trends.
				</span>
			</div>
			<div id="lowerfeatures" class="absolute left-0 top-0 right-0 bottom-0 z-[-1] hidden lg:block"></div>
		</div>
	</div>
</template>

<style>
#lowerfeatures {
	background: url('../assets/images/lowerfeatures-bg.png') no-repeat center center;
}
</style>