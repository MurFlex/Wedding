<template>
	<form @submit.prevent="sendToTelegram" class="survey">
		<fieldset class="survey__fieldset">
			<legend class="survey__title">Присутствие</legend>
			<div class="survey__input-wrapper">
				<input
					type="radio"
					id="isComing"
					name="coming"
					value="true"
					class="survey__input_round"
					@click="() => (isComing = true)"
					checked
				/>
				<label for="isComing">С удовольствем приду</label>
			</div>

			<div class="survey__input-wrapper">
				<input
					type="radio"
					id="isNotComing"
					name="coming"
					value="false"
					class="survey__input_round"
					@click="() => (isComing = false)"
				/>
				<label for="isNotComing">К сожалению, не смогу прийти</label>
			</div>
		</fieldset>

		<fieldset class="survey__fieldset">
			<legend class="survey__title">
				Предпочтения по алкоголю
				<p class="survey__subtitle">Можно выбрать несколько позиций</p>
			</legend>

			<div v-for="item in alcohol">
				<input
					type="checkbox"
					:id="item.name"
					:checked="item.isSelected"
					@click="() => (item.isSelected = !item.isSelected)"
				/>
				<label :for="item.name">{{ item.name }}</label>
			</div>
		</fieldset>
		<fieldset class="survey__fieldset">
			<label class="survey__title" for="allergy"
				>Есть ли у вас пищевые аллергии? Если да, то какие?
				<p class="survey__subtitle">Если нет, напишите “нет”</p>
			</label>

			<input type="text" id="allergy" v-model="allergy" />
		</fieldset>
		<button class="survey__submit" type="submit">Отправить</button>
	</form>
</template>
<script setup lang="ts">
import telegramMethods from '@/helpers/telegramMethods'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import jwtDecrypt from '../helpers/jsonDecrypt'
import router from '../routes/index'

await router.isReady()

const route = useRoute()

const token = route.query.guestData

const guests = computed(() => jwtDecrypt(token).guests.join(' и '))

const sendToTelegram = async event => {
	const telegramApi = await telegramMethods()
	const message = `*${guests.value}*\nПридут: ${
		isComing.value ? 'Да' : 'Нет'
	}\n\n*Выбранный алкоголь:*\n${alcohol.value
		.filter(alcohol => alcohol.isSelected)
		.map(alcohol => alcohol.name)
		.join('\n')}\n\n${allergy.value ? `*Аллергия:*\n${allergy.value}` : 'Нет'}`
	telegramApi.sendToAdmins(message)

	allergy.value = ''
	alcohol.value = alcohol.value.map(item => ({ ...item, isSelected: false }))
}

const isComing = ref(true)
const allergy = ref('')
const alcohol = ref([
	{
		name: 'Белое вино',
		isSelected: false,
	},
	{
		name: 'Игристое вино',
		isSelected: false,
	},
	{
		name: 'Водка',
		isSelected: false,
	},
	{
		name: 'Пиво',
		isSelected: false,
	},
	{
		name: 'Джин',
		isSelected: false,
	},
	{
		name: 'Виски',
		isSelected: false,
	},
	{
		name: 'Не пью, только б/а',
		isSelected: false,
	},
])
</script>
<style lang="scss" scoped>
.survey {
	display: flex;
	flex-direction: column;
	font-family: $main-font;
	font-weight: 400;
	font-size: 20px;
	background-color: rgba(255, 255, 255, 0.2);
	border: 2px solid rgba(105, 105, 105, 0.4);
	border-radius: 30px;
	padding: 38px 70px;

	@media (max-width: 976px) {
		font-size: 16px;
		padding: 24px 10px;
	}

	&__fieldset {
		border: 0;
		display: flex;
		flex-direction: column;
		gap: 25px;
		margin-bottom: 42px;

		@media (max-width: 976px) {
			margin-bottom: 20px;
		}

		@media (max-width: 576px) {
			gap: 20px;
		}
	}

	&__title {
		font-size: clamp(1.125rem, 0.968rem + 0.66vw, 1.563rem);
		margin-bottom: 10px;
		line-height: clamp(1.25rem, 0.959rem + 1.226vw, 2.063rem);
	}

	&__subtitle {
		font-size: 15px;
		color: rgba(0, 0, 0, 0.5);
	}

	&__submit {
		@include Button();

		@media (max-width: 976px) {
			margin-top: 30px;
		}

		@media (max-width: 576px) {
			margin-top: 0;
		}
	}

	input[type='radio'] {
		width: 24px;
		height: 24px;
		opacity: 0;

		@media (max-width: 976px) {
			width: 18px;
			height: 18px;
		}
	}

	input[type='radio']:checked + label::before {
		background: rgb(0, 0, 0);
		background: radial-gradient(
			circle,
			rgba(0, 0, 0, 1) 39%,
			rgba(0, 0, 0, 0) 48%
		);
	}

	input[type='radio'] + label {
		position: relative;
		margin-left: 14px;

		&::before {
			content: '';
			position: absolute;
			display: block;
			top: -1px;
			left: -39px;
			width: 24px;
			height: 24px;
			border: 1px solid rgba(0, 0, 0, 0.5);
			border-radius: 100%;

			@media (max-width: 976px) {
				left: -32px;
				width: 18px;
				height: 18px;
			}
		}
	}

	input[type='checkbox'] {
		width: 24px;
		height: 24px;
		opacity: 0;

		@media (max-width: 976px) {
			width: 18px;
			height: 18px;
		}
	}

	input[type='checkbox'] + label {
		position: relative;
		margin-left: 14px;

		&::before {
			content: '';
			position: absolute;
			display: block;
			top: -1px;
			left: -39px;
			width: 24px;
			height: 24px;
			border: 1px solid rgba(0, 0, 0, 0.5);

			@media (max-width: 976px) {
				width: 18px;
				height: 18px;
				top: -1px;
				left: -31px;
			}
		}
	}

	input[type='checkbox']:checked + label::after {
		content: '';
		position: absolute;
		top: 4px;
		left: -34px;
		width: 16px;
		height: 16px;
		background: rgb(0, 0, 0);

		@media (max-width: 976px) {
			width: 12px;
			height: 12px;
			top: 3px;
			left: -27px;
		}
	}

	input[type='text'] {
		background-color: transparent;
		border: 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.5);
		font-weight: 700;
	}
}
</style>
