export const apiCalls = {
	getReservations() {
		return fetch('http://localhost:3001/api/v1/reservations').then(res => res.json()).catch(err => console.log(err))
	}
}