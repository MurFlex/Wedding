<template>
	<div class="introduction">
		<p>{{ guests }},</p>
		<p>Рады пригласить {{ introduction }} на нашу свадьбу!</p>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import jwtDecrypt from '../helpers/jsonDecrypt'
import router from '../routes/index'

await router.isReady()

const route = useRoute()

const token = route.query.guestData

const introduction = ref('')

const guests = computed(() => {
	const decode = jwtDecrypt(token)
	const guestsDecoded = decode.guests
	introduction.value = decode.introduction
	const count = guestsDecoded.length

	switch (count) {
		case 1:
			return guestsDecoded[0]
		case 2:
			return 'Дорогие ' + guestsDecoded.join(' и ')
		default:
			return (
				'Дорогие ' +
				guestsDecoded.slice(0, count - 1).join(', ') +
				` и ${guestsDecoded[count - 1]}`
			)
	}
})
</script>

<style lang="scss" scoped>
.introduction {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 8px;
	position: relative;
	z-index: 2;
	font-size: clamp(0.875rem, 0.517rem + 1.509vw, 1.875rem);

	@media (max-width: 768px) {
		font-size: 20px;
		gap: 12px;
	}

	&::after,
	&::before {
		position: absolute;
		content: '';
		background-color: #fff;
		width: 15vw;
		height: 1px;
		top: 50%;

		animation-name: slideIn;
		animation-duration: 1.5s;
		animation-timing-function: ease-in;
	}

	&::after {
		left: -16vw;
	}

	&::before {
		right: -16vw;
	}

	@media (max-width: 768px) {
		&::before,
		&::after {
			display: none;
		}
	}
}
</style>
