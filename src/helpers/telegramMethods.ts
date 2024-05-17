import useTelegramApi from '@/composables/useTelegramApi'

export default async function telegramMethods() {
	const admins = [458171610, 797894278]

	const sendMessage = (id: number, message: string): void => {
		useTelegramApi('sendMessage', {
			method: 'POST',
			chat_id: id,
			parse_mode: 'markdown',
			text: message,
		})
	}

	const sendToAdmins = (message: string): void => {
		admins.forEach(admin => {
			sendMessage(admin, message)
		})
	}

	return { sendMessage, sendToAdmins }
}
