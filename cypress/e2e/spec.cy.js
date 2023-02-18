

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
    cy.get('#checkBoxOption2').should('not.be.checked').check().should('be.checked').and('have.value','option2');
    

    cy.get('input[type="checkbox"]').check(['option1','option3'])

    cy.get('input[type="checkbox"]').uncheck(['option1','option3']);

    // Dynamic Dropdown
    cy.get('#autocomplete').type('in');

    cy.get('.ui-menu-item div').each(($el, index, $list) => {

      if($el.text()=="Dominican Republic"){

        cy.wrap($el).click();
      }


    });
    cy.get('#autocomplete').should('have.value','Dominican Republic');
    cy.get('#alertbtn').click();
    cy.on('window:alert',(str) => {
      // mocha
      expect(str).to.contains('Hello')
    
    })

  })
})