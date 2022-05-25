describe('App', () => {
	beforeEach(() => {
		cy.intercept('http://localhost:3001/api/v1/reservations', {
			fixture: 'reservations'
		})
	})
})