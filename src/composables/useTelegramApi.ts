const baseUrl =
	'api.telegram.org/bot7184704989:AAHaRbw1n6YHWAc3q5BFKlR8w5IHJLSyYXU' // Тестовый бот

export default async function useTelegramApi(method, data) {
	const requestData =
		data.method === 'GET'
			? {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
					query: JSON.stringify(data),
			  }
			: {
					method: data.method,
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
			  }

	const response = await fetch(
		`https://${baseUrl}/${method}`,
		requestData
	).then(response => response.json())

	return response
}
