/// <reference types="cypress" />

context('Aliasing', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('submit form', () => {

      cy.get('.action-email')
       .type('fake@email.com')
       .should('have.value', 'fake@email.com')
    })
  })
  