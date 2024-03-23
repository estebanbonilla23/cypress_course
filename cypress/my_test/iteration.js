/// <reference types="cypress" />

context('Aliasing', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('check all divs', () => {

      cy.get('.well')
      .each(($el, index, $list) => {
        if($el.find("input")){
          var label = $el.find('label').text()
          cy.log("it has input: '" + $el.attr("class")+ "' label: '"+label+"'")
        }else{
          cy.log("it doesn't have input")
        }

        //Javascript: 
          //to check an element inside an array use: contains 
          //to check an string inside another string use: includes 
      })
    })
  })
  