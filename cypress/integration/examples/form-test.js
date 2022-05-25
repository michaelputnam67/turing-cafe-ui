describe('Form', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/')
		cy.intercept('POST', 'http://localhost:3001/api/v1/reservations', {fixture: 'post-reservation'})
	})

	it('A user should be able to enter a name', () => {
		cy.get('input[name=name]').type('Michael')
		cy.get('input[name=name]').should('have.value', 'Michael')
	})

	it('A user should be able to enter a date', () => {
		cy.get('input[name=date]').type('2022-06-24')
		cy.get('input[name=date]').should('have.value', '2022-06-24')
	})

	it('A user should be able to enter a number', () => {
		cy.get('input[name=numberOfGuests]').type('4')
		cy.get('input[name=numberOfGuests]').should('have.value', '4')
	})
	
	it('A user should be able to enter a time', () => {
		cy.get('input[name=time]').type('07:30')
		cy.get('input[name=time]').should('have.value', '07:30')
	})

	it('A user should be able to make a new reservation', () => {
		cy.get('input[name=name]').type('Michael')
		cy.get('input[name=date]').type('2022-06-24')
		cy.get('input[name=numberOfGuests]').type('4')
		cy.get('input[name=time]').type('07:30')
		cy.intercept('POST', 'http://localhost:3001/api/v1/reservations', {fixture: 'post-reservation'})
		cy.get('button[type=submit]').click()
	})
	

})