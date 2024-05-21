<template>
	<Suspense>
		<Header />
		<template #fallback> Loading... </template>
	</Suspense>
	<Section :title="'Дорогие гости!'">
		<div class="about-us">
			<div class="about-us__image-wrapper">
				<img class="about-us__image" src="./images/us.png" alt="" />
			</div>
			<div class="about-us__text">
				<p class="about-us__paragraph">
					Совсем скоро в&nbsp;нашей жизни произойдёт очень важное
					событие&nbsp;&mdash; наша свадьба! Однажды мы&nbsp;поняли, что нет
					ничего важнее любви и&nbsp;что идти дальше мы&nbsp;хотим вместе.
					Мы&nbsp;верим, что этот день станет красивым началом нашей долгой
					и&nbsp;счастливой жизни.
				</p>
				<p class="about-us__paragraph">
					Приглашаем вас разделить с&nbsp;нами радость этого дня. Будем очень
					благодарны вашей поддержке и&nbsp;добрым пожеланиям.
				</p>
				<p class="about-us__paragraph">До&nbsp;встречи на&nbsp;свадьбе!</p>
			</div>
		</div>
	</Section>
	<Section :title="'Дата проведения'">
		<div class="date">
			<div class="date__calendar">
				<img src="./images/calendar.png" alt="Календарь" />
			</div>
			<div class="date__image">
				<img src="./images/flowers.png" alt="Цветы" />
			</div>
		</div>
	</Section>
	<Section class="place" :title="'Место проведения'">
		<h2 class="place__title">Загородный клуб «‎ЗаВидное»</h2>
		<p class="place__subtitle">
			Московская область, Ленинский район, пос.&nbsp;Измайлово д. 23, с 1
		</p>
		<a
			target="_blank"
			href="https://yandex.ru/maps/-/CDbEUR0B"
			class="place__button"
			>Открыть карту</a
		>

		<div class="place__images">
			<img src="./images/house.png" class="place__image" />
			<img src="./images/arca.png" class="place__image" />
		</div>
	</Section>
	<Section :title="'Наша история'">
		<div class="history">
			<div class="history__paragraph">
				Наше знакомство произошло очень странно и&nbsp;сумбурно через мою
				подружку в социальной сети, когда мы&nbsp;были ещё школьниками. Нам было
				по&nbsp;14&nbsp;лет, тогда знакомства в&nbsp;интернете не&nbsp;были так
				популярны, как сейчас. Мы&nbsp;жили не&nbsp;рядом и&nbsp;даже
				не&nbsp;близко, всё, что у&nbsp;нас было&nbsp;&mdash; социальная сеть и
				бесконечное желание переписываться и&nbsp;узнавать друг друга, что
				мы&nbsp;и делали почти каждый день. Через год общения мы&nbsp;увиделись,
				а&nbsp;потом стали общаться ещё больше и&nbsp;видеться чаще.
				На&nbsp;всех каникулах, при любой возможности старались куда-то вместе
				ездить, несмотря на&nbsp;снегопад, дождь и&nbsp;невыносимую жару. Если
				что мы&nbsp;знаем все торговые центры и&nbsp;парки Москвы))
			</div>
			<div class="history__paragraph">
				Постепенно познакомились с&nbsp;семьями друг друга, прошли через много
				разных событий, всегда были рядом и&nbsp;всегда друг друга поддерживали,
				будь&nbsp;то экзамены в&nbsp;школе, поступление в&nbsp;университет,
				сессии, диплом и&nbsp;первая работа. Вместе вошли во&nbsp;взрослую жизнь
				и&nbsp;поняли, что наша школьная любовь и&nbsp;крепкая дружба стали
				чем-то больше.
			</div>
			<div class="history__paragraph">
				Наша детская и&nbsp;подростковая влюблённость выросла в&nbsp;самую
				настоящую крепкую любовь всей жизни. Сейчас нам по&nbsp;24,
				и&nbsp;мы&nbsp;создаём самую лучшую семью!
			</div>
			<div class="history__mark">Оксана, невеста</div>
		</div>
	</Section>
	<Section :is-white="true" :title="'Расписание дня'">
		<div class="schedule">
			<div class="schedule__item" v-for="item in schedule">
				<div class="schedule__item-time">{{ item.time }}</div>
				<div class="schedule__line">
					<div class="circle"></div>
					<div class="line"></div>
				</div>
				<div class="schedule__item-text">
					<div class="schedule__item-title">{{ item.title }}</div>
					<div class="schedule__item-description">{{ item.text }}</div>
				</div>
			</div>
		</div>
	</Section>
	<Section class="wishes" :title="'Несколько пожеланий'">
		<ul class="wishes__list">
			<li class="wishes__list-item" v-for="(item, index) in wishes">
				<div class="wishes__list-item_index">
					{{ index + 1 }}
				</div>
				<p class="wishes__list-item_text">
					{{ item }}
				</p>
			</li>
		</ul>
	</Section>
	<Section :is-white="true" :title="'Дресс-код'">
		<div class="dress">
			<p class="dress__paragraph">
				Мы очень старались сделать праздник красивым, поэтому нам будет приятно,
				если вы поддержите стилистику нашей свадьбы и используете в своих
				нарядах предложенные цвета и оттенки, желательно без ярких и кричащих
				принтов.
			</p>
			<div class="dress__colors">
				<div class="dress__colors-women">
					<div
						class="dress__colors-color"
						:style="color"
						v-for="color in womenColors"
					></div>
				</div>
				<div class="dress__colors-men">
					<p class="dress__paragraph">
						Для джентльменов также неотъемлемой частью наряда станут брюки
						серого, тёмно-серого, коричневого и песочного оттенков
					</p>
					<div class="dress__colors-men_wrap">
						<div
							class="dress__colors-color"
							:style="color"
							v-for="color in menColors"
						></div>
					</div>
				</div>
			</div>
			<div class="dress__bottom">
				<p class="dress__paragraph">
					Чтобы вам было легче подобрать наряд, мы собрали для вас доску с
					различными образами, среди которых множество видов и стилей одежды.
				</p>
				<a target="_blank" href="https://pin.it/1WbuIQa48" class="dress__link"
					>Открыть доску в Pinterest</a
				>
				<p class="dress__paragraph">
					Надеемся каждый сможет выбрать свой цвет и подобрать наряд.
				</p>
			</div>
		</div>
	</Section>
	<Section :title="'Общий чат'">
		<div class="chat">
			<p class="chat__paragraph">
				Для вашего удобства мы создали чаты в Telegram для друзей и WhatsApp для
				родственников, кому удобнее там. В чатах вы будете получать информацию
				обо всех изменениях, связанных с нашей свадьбой, а также там можно
				делиться фотографиями, сделанными в процессе свадьбы, шутить и просто
				общаться с другими гостями. После торжества в эти чаты мы пришлём
				фотографии от фотографа.
			</p>
			<div class="chat__links">
				<a
					href="https://t.me/+NRZefNbMrYU4ODdi"
					target="_blank"
					class="chat__link"
					>Telegram</a
				>
				<a
					href="https://chat.whatsapp.com/Dev0HQjCguy2HrWItVENQd"
					target="_blank"
					class="chat__link"
					>WhatsApp</a
				>
			</div>
			<p class="chat__paragraph">Присоединяйтесь и будем на связи!</p>
		</div>
	</Section>
	<Section class="section__survey" :title="'Небольшая анкета'">
		<Suspense>
			<Survey />
			<template #fallback> Loading... </template>
		</Suspense>
	</Section>
	<Section
		class="section__timer"
		:is-full-height="true"
		:title="'Обратный отсчет'"
	>
		<div class="timer__start">До нашей свадьбы осталось..</div>
		<div class="timer">
			<div class="timer__items">
				<div class="timer__item timer__days">
					<div class="number">{{ days }}</div>
					{{ declensionNum(days, ['день', 'дня', 'дней']) }}
				</div>
				<div class="timer__item timer__hours">
					<div class="number">{{ hours }}</div>
					{{ declensionNum(hours, ['час', 'часа', 'часов']) }}
				</div>
				<div class="timer__item timer__minutes">
					<div class="number">{{ minutes }}</div>
					{{ declensionNum(minutes, ['минута', 'минуты', 'минут']) }}
				</div>
				<div class="timer__item timer__seconds">
					<div class="number">{{ seconds }}</div>
					{{ declensionNum(seconds, ['секунда', 'секунды', 'секунд']) }}
				</div>
			</div>
		</div>
		<p class="timer__ending">До встречи!</p>
	</Section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import Section from './components/Section.vue'
import Survey from './components/Survey.vue'

const deadline: Date = new Date(2024, 7, 7, 15, 0, 0)
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const schedule = [
	{
		time: '15:00',
		title: 'Сбор гостей, welcome-зона и фуршет',
		text: 'Время пролетит незаметно за общением с другими гостями, фуршетом, а также классными и интересными занятиями, которые мы придумали для вас',
	},
	{
		time: '16:30',
		title: 'Торжественная церемония',
		text: 'Пожалуй, самый трогательный момент этого дня. Нас ожидает торжественная и незабываемая церемония росписи, полная любви и искренности',
	},
	{
		time: '17:00',
		title: 'Свадебный ужин',
		text: 'С официальной частью покончено, самое время насладиться вкусной едой, поднять бокалы за счастье молодожёнов и просто насладиться тёплой семейной обстановкой праздничного ужина',
	},
	{
		time: '21:00',
		title: 'Торт и бенгальские огни',
		text: 'Пора отведать кусочек торта и зажечь бенгальские огни в честь завершения свадебного вечера',
	},
	{
		time: '22:30',
		title: 'Завершение вечера',
		text: 'Спасибо, что были с нами в этот важный день!',
	},
]

const wishes = [
	'Дорогие гости, мы будем рады видеть вас на нашем свадебном торжестве! Возьмите с собой праздничное настроение и тёплые пожелания!',
	'Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за любой вклад в бюджет нашей молодой семьи. ',
	'Дарить цветы совершенно не обязательно. Мы не успеем насладиться красотой всех букетов. Лучше позаботьтесь о своём транспорте до места празднования.',
	'От всего сердца просим вас воздержаться от криков "Горько!" и сохранить атмосферу уютного семейного таинства.',
]

const menColors = [
	{
		backgroundColor: '#808080',
		opacity: 0.8,
	},
	{
		backgroundColor: '#696969',
		opacity: 1,
	},
	{
		backgroundColor: '#654321',
		opacity: 0.9,
	},
	{
		backgroundColor: '#D2B48C',
		opacity: 1,
	},
]

const womenColors = [
	{
		backgroundColor: '#FFE4E1',
		opacity: 1,
	},
	{
		backgroundColor: '#FFC0CB',
		opacity: 1,
	},
	{
		backgroundColor: '#FF69B4',
		opacity: 0.8,
	},
	{
		backgroundColor: '#DB7093',
		opacity: 1,
	},
	{
		backgroundColor: '#FFFFDD',
		opacity: 1,
	},
	{
		backgroundColor: '#FFE4B5',
		opacity: 1,
	},
	{
		backgroundColor: '#FFBE98',
		opacity: 1,
	},
	{
		backgroundColor: '#FFA07A',
		opacity: 1,
	},
	{
		backgroundColor: '#E0FFFF',
		opacity: 1,
	},
	{
		backgroundColor: '#ADD8E6',
		opacity: 1,
	},
	{
		backgroundColor: '#4682B4',
		opacity: 1,
	},
	{
		backgroundColor: '#334EAC',
		opacity: 0.9,
	},
]

function declensionNum(num: number, words: Array<String>) {
	return words[
		num % 100 > 4 && num % 100 < 20
			? 2
			: [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
	]
}

function countdownTimer() {
	const diff = deadline - new Date()

	if (diff <= 0) {
		clearInterval(timerId)
	}
	days.value = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0
	hours.value = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0
	minutes.value = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0
	seconds.value = diff > 0 ? Math.floor(diff / 1000) % 60 : 0
}

countdownTimer()
const timerId = setInterval(countdownTimer, 1000)
</script>

<style lang="scss">
.section {
	&__survey {
		background-image: url('./images/surveybackground.png');
		background-repeat: no-repeat;
		background-size: cover;
		padding-bottom: 88px;
	}
}

.about-us {
	display: flex;
	gap: 36px;
	font-family: $main-font;
	font-size: clamp(1rem, 0.91rem + 0.377vw, 1.25rem);
	line-height: 133%;

	@media (max-width: 976px) {
		flex-direction: column;
		align-items: center;
	}

	&__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	&__paragraph:not(:last-child) {
		margin-bottom: 1em;
	}

	&__image {
		width: clamp(18rem, 14.146rem + 16.226vw, 28.75rem);
		border-radius: 30px;
		filter: contrast(75%) grayscale(20%);
	}
}

.date {
	display: flex;
	gap: 30px;
	align-items: center;

	@media (max-width: 976px) {
		flex-direction: column;
	}

	&__calendar {
		position: relative;
		&::before {
			content: url('./images/hearttest.svg');
			position: absolute;
			top: 112px;
			left: 190px;
			animation: beat 1s alternate infinite;
		}

		@media (max-width: 976px) {
			&::before {
				top: 115px;
				left: 195px;
			}
		}

		@media (max-width: 550px) {
			width: 364px;

			&::before {
				top: 85px;
				left: 148px;
			}
		}

		img {
			width: 100%;
		}
	}

	&__image {
		width: 460px;

		@media (max-width: 550px) {
			width: 363px;
		}

		img {
			width: 460px;

			@media (max-width: 550px) {
				margin: 0 auto;
				width: 100%;
			}
		}
	}
}

.place {
	.section__content {
		display: flex;
		flex-direction: column;
	}

	&__title {
		font-family: $main-font;
		font-size: clamp(1.25rem, 1.138rem + 0.472vw, 1.563rem);
		text-align: center;
		font-weight: 600;
		margin-bottom: 18px;
	}

	&__subtitle {
		font-family: $main-font;
		font-size: clamp(1rem, 0.91rem + 0.377vw, 1.25rem);
		text-align: center;
		font-weight: 400;
	}

	&__button {
		margin-top: 54px;
		@include Button();
	}

	&__images {
		display: flex;
		gap: clamp(1.25rem, -6.638rem + 12.931vw, 5rem);
		margin-top: 80px;

		@media (max-width: 768px) {
			align-items: center;
			flex-direction: column;
		}
	}

	&__image {
		width: 50%;

		@media (max-width: 768px) {
			width: 90%;
		}
	}
}

.schedule {
	display: flex;
	flex-direction: column;
	font-family: $main-font;
	font-size: clamp(1rem, 0.91rem + 0.377vw, 1.25rem);
	color: #696969;
	font-weight: 400;
	line-height: 133%;
	overflow: hidden;

	&__line {
		margin-right: clamp(1.5rem, 0.738rem + 3.208vw, 3.625rem);

		.circle {
			position: relative;
			top: 4px;
			width: 12px;
			height: 12px;
			background-color: #696969;
			border-radius: 50%;
		}
		.line {
			position: relative;
			left: 5px;
			width: 2px;
			height: calc(100% + 115px);
			background: #696969;
		}
	}

	&__item {
		height: 100%;
		display: flex;
		padding-bottom: 115px;

		&-time {
			font-weight: 700;
			color: darken($color: #696969, $amount: 10%);
			min-width: 2em;
			margin-right: clamp(1.5rem, 0.738rem + 3.208vw, 3.625rem);
		}

		&-title {
			font-weight: 500;
			font-size: clamp(1.25rem, 1.138rem + 0.472vw, 1.563rem);
			color: black;
			margin-bottom: clamp(1.5rem, 1.298rem + 0.849vw, 2.063rem);
		}

		&:first-child {
			.schedule__line {
				.line {
					margin-top: 21px;
				}

				.circle {
					border: 1px solid #696969;
					background-color: transparent;
				}
			}
		}

		&:last-child {
			.schedule__line {
				.line {
					height: 110%;
				}
			}
		}
	}
}

.wishes {
	background-image: url(./images/wishesbackground.png);
	background-repeat: no-repeat;
	background-size: cover;

	&__list {
		font-family: $main-font;
		padding: 0 90px 105px 90px;
		list-style-type: none;

		@media (max-width: 768px) {
			padding: 0 0 50px 0;
		}

		&-item {
			display: flex;
			align-items: center;
			border: 2px solid rgba(105, 105, 105, 0.4);
			padding: 24px 27px;
			border-radius: 30px;

			&_index {
				display: flex;
				font-size: 66px;
				color: #556b2f;
				opacity: 0.3;
				min-width: 83px;

				&::after {
					content: '\00A0';
					position: relative;
					bottom: 4px;
					left: 15px;
					display: inline-block;
					height: 90%;
					width: 3px;
					transform: rotate(25deg);
					background-color: #556b2f;
				}

				@media (max-width: 576px) {
					display: none;
				}
			}

			&_text {
				font-size: clamp(1rem, 0.91rem + 0.377vw, 1.25rem);
				color: darken($color: #696969, $amount: 10%);
				line-height: 133%;
			}

			&:not(:last-child) {
				margin-bottom: 28px;
			}
		}
	}
}

.dress {
	display: flex;
	flex-direction: column;
	gap: 65px;
	font-family: $main-font;
	font-size: clamp(1rem, 0.91rem + 0.377vw, 1.25rem);
	font-weight: 400;
	line-height: 133%;

	@media (max-width: 976px) {
		gap: 30px;
	}

	&__colors {
		display: flex;
		justify-content: space-between;

		@media (max-width: 976px) {
			flex-direction: column;
			align-items: center;
			gap: 30px;
		}

		&-women {
			max-width: calc(83px * 4);
			display: flex;
			flex-wrap: wrap;
		}

		&-men {
			max-width: 475px;
			display: flex;
			flex-wrap: wrap;
			text-align: center;
			align-items: center;
			justify-content: center;

			&_wrap {
				display: flex;
				gap: 30px;

				@media (max-width: 976px) {
					margin-top: 11px;
				}

				@media (max-width: 576px) {
					gap: 5px;
				}
			}
		}

		&-color {
			width: 83px;
			height: 83px;
		}
	}

	&__paragraph {
		text-align: start;
	}

	&__bottom {
		display: flex;
		flex-direction: column;
		gap: 51px;
		text-align: center;
	}

	&__link {
		@include Button();
	}
}

.chat {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 58px;
	font-size: clamp(1rem, 0.91rem + 0.377vw, 1.25rem);
	font-family: $main-font;
	font-weight: 400;
	padding-bottom: 50px;
	line-height: 133%;

	&__links {
		width: 100%;
		gap: 10px;
		display: flex;
		justify-content: space-around;

		@media (max-width: 576px) {
			justify-content: space-between;
		}
	}

	&__link {
		@include Button();
	}
}

.history {
	display: flex;
	flex-direction: column;
	gap: 1.5em;
	font-family: $main-font;
	font-size: clamp(1rem, 0.91rem + 0.377vw, 1.25rem);
	font-weight: 400;
	text-indent: 20px;
	line-height: 133%;

	&__mark {
		font-weight: 500;
		align-self: end;
	}
}

.section__timer {
	display: flex;
	flex-direction: column;

	.section__content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 70%;
		flex: 1 0 0;

		@media (max-width: 768px) {
			width: 100%;
		}
	}
}

.timer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-weight: 500;

	&__start {
		font-family: $main-font;
		text-align: center;
		font-size: clamp(1.25rem, 1.071rem + 0.755vw, 1.75rem);
	}

	&__items {
		font-family: $main-font;
		width: 100%;
		display: flex;
		font-size: clamp(1.5rem, 0.962rem + 2.264vw, 3rem);
		justify-content: space-between;
	}

	&__item {
		position: relative;
		margin-left: 5px;
		margin-right: 5px;
		padding-bottom: 15px;
		font-weight: 400;
		font-size: 20px;

		.number {
			font-size: clamp(1.5rem, 0.962rem + 2.264vw, 3rem);
		}
	}

	&__ending {
		font-family: $main-font;
		text-align: center;
		font-size: clamp(1.25rem, 1.071rem + 0.755vw, 1.75rem);
	}
}
</style>
