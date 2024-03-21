/// <reference types="cypress" />

context('Aliasing', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('submit form', () => {

      cy.get('.action-email:visible')
       .type('fake@email.com')
       .should('have.length',1)
       .and('have.value', 'fake@email.com')

      cy.wait(1000)
    })
  })
  