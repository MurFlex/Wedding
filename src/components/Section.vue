<template>
	<section
		class="section"
		:class="{ section__white: isWhite, 'section__full-height': isFullHeight }"
	>
		<div class="section__title-wrapper">
			<h2 class="section__title">
				{{ title }}
			</h2>
			<p class="section__subtitle">
				{{ title }}
			</p>
		</div>
		<div class="section__content">
			<slot />
		</div>
	</section>
</template>
<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
	title?: string
	isWhite?: boolean
	isFullHeight?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	title: 'test',
	isWhite: false,
	isFullHeight: false,
})
</script>
<style lang="scss" scoped>
.section {
	width: 100%;
	background-color: rgba(250, 240, 230, 0.5);
	padding: 58px 0;

	@media (max-width: 1024px) {
		padding: 48px 0;
	}

	&__white {
		background-color: #fff !important;
	}

	&__full-height {
		height: 100vh;
	}

	&__content {
		max-width: 940px;
		margin: 0 auto;

		@media (max-width: 976px) {
			padding: 0 15px;
		}
	}

	&__title-wrapper {
		text-align: center;
		padding-bottom: 86px;

		@media (max-width: 1024px) {
			padding-bottom: 40px;
		}
	}

	&__title {
		color: $header-color;
		font-weight: 400;
		font-size: clamp(2.375rem, 0.986rem + 5.849vw, 6.25rem);
		opacity: 0.2;
	}

	&__subtitle {
		line-height: 0%;
		position: relative;
		top: -0.5em;
		color: $subheader-color;
		font-size: clamp(1.625rem, 1.087rem + 2.264vw, 3.125rem);
	}
}
</style>
