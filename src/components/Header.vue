<template>
	<header class="header">
		<Introduction />
		<h1 class="header__title">
			<p>Кирилл</p>
			<p class="header__title_right">и</p>
			<p>Оксана</p>
		</h1>
		<div class="header__date">8 августа 2024 года</div>
	</header>
</template>
<script setup lang="ts">
import Introduction from './Introduction.vue'
</script>
<style lang="scss" scoped>
.header {
	font-family: $main-font;
	position: relative;
	height: 100vh;
	color: $text-color;
	font-size: clamp(1.25rem, 1.026rem + 0.943vw, 1.875rem);
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-image: url('../images/test.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50% 100%;

	@media (max-width: 550px) {
		background-position: 41% 100%;
	}

	&::after {
		content: '';
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		inset: 0;
	}

	&__title,
	&__date {
		position: relative;
		z-index: 2;
	}

	&__title {
		text-align: center;
		font-family: 'RosvigtsCyrillic';
		font-size: clamp(5.313rem, 4.483rem + 3.491vw, 7.625rem);
		font-weight: 400;
		color: $text-color;
		display: flex;
		flex-direction: column;
		line-height: 80%;
		margin-top: 106px;
		margin-bottom: 106px;

		animation-name: appear;
		animation-duration: 1.5s;
		animation-timing-function: ease-in;
	}

	&__date {
		animation-name: fromBottom;
		animation-duration: 1.5s;
		animation-timing-function: ease-in;
	}
}

@keyframes fromBottom {
	from {
		opacity: 0.5;
		transform: translateY(300%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
