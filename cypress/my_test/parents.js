/// <reference types="cypress" />

context('Aliasing', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('check password field', () => {

      cy.get('.well')
       .find('#password1')
       .type("password")
       //assert type chai
       .should('have.length',1)
       .and('have.value', 'password')

      cy.wait(1000)
    })

    it('check by position', () => {

      cy.get('.well')
       .should('have.length',14).eq(2)
       .find('label')
       .should('have.text',"Full Name")

      cy.wait(1000)
    })

    it('check by text', () => {

      cy.get('.well')
       .should('have.length',14).eq(2)
       .contains('Full Name')

      cy.wait(1000)
    })
  })
  