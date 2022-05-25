export const apiCalls = {
	getReservations() {
		return fetch('http://localhost:3001/api/v1/reservations').then(res => res.json()).catch(err => console.log(err))
	},

	postReservation(data) {
		console.log(data)
		return fetch('http://localhost:3001/api/v1/reservations', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: data.name,
				date: data.date,
				time: data.time,
				number: data.numberOfGuests
			})
		}).then(res => res.json()).catch(err => console.log(err))
	}
}