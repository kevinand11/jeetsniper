<template>
	<a @click="click" class="font-bold lg:font-normal"
		:class="{ 'active-link': route.fullPath === to }">
		<slot />
	</a>
</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const props = defineProps({
	to: {
		type: String,
		required: true
	},
	external: {
		type: Boolean,
		required: false,
		default: false
	}
})

const emits = defineEmits(['clicked'])

const click = async () => {
	emits('clicked')
	if (props.external) open(props.to, '_blank')
	else router.push(props.to)
}
</script>
