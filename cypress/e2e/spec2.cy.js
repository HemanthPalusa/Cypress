

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
// This example is used to handle the alert of the page, cypress automtically handle the alerts automatically .


    cy.get('#alertbtn').click();
// If we want to handle the alert or validate the text on alert box ,we need to use below example .

    cy.on('window:alert',(str) => {
      // mocha
      expect(str).to.contains('Hello')
    
    })
// This example is used to handle the confimation  of the page, cypress automtically handle the alerts automatically .
 
    cy.get('#confirmbtn').click();
// If we want to handle the confirmation or validate the text on confirmation box ,we need to use below example .

    cy.on('window:confirm',(str) => {
      //Mocha
      expect(str).to.contains('Hello')
    })

    // This Example , When we click on button it will open child tab , it will be not 
    // acceable by cypress . So cypress is having ability to change the DOM of the element .
    // So by using invoke function , we are invoking jquery functions to remove the attribute target from the element.
    //So that it will not open the child page and it will open on the same tab.
    // we need to use browser events and jquery functions with cypress
    cy.get('#opentab').invoke('removeAttr','target').click();
    // To verify we have landed on correct page or not , we need to use url()
    // To verify if the text present or not then we need to use include in the should function.

    cy.url().should('include','https://www.rahulshettyacademy.com/')

    cy.go('back');



  })
})