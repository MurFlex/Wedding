<template>
	<div class="introduction">
		<p>Дорогие {{ guests }},</p>
		<p>Рады пригласить вас на нашу свадьбу!</p>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import jwtDecrypt from '../helpers/jsonDecrypt'
import router from '../routes/index'

await router.isReady()

const route = useRoute()

const token = route.query.guestData

const guests = computed(() => jwtDecrypt(token).guests.join(' и '))
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
