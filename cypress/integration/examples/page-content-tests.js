describe('App', () => {
	beforeEach(() => {
		cy.intercept('http://localhost:3001/api/v1/reservations', {
			fixture: 'reservations'
		})
		cy.visit('http://localhost:3000/')
	})

	it('A user should see a list of reservations', () => {
		cy.get('.resy-container').children()
		.should('have.length', 9)
		.first('h2', 'Christie')
		.last('.guest-number', 3)
	})

	it('A user should see a header for the website', () => {
		cy.get('.app-title').should('contain', 'Turing Cafe Reservations')
	})
})