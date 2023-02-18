

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


    cy.get('[name="courses"] tr td:nth-child(2)').each(($el,index,$list) => {

      const text = $el.text()

      if(text.includes("Python")){

        cy.get('[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){

          expect(price.text()).to.equal('25')

        })
      }

    } )

    
    // Handeling hidden related to elements and cliking on them . cypres can handel hidden elements using {}
    //Hidden elements visible with Jquery function as shown in below comment code.
    // cy.get('Hemanth').invoke('show')
    cy.contains('Top').click({force:true})
    cy.url().should('include','top')


    // Handling child windows using cypress , by taking url from the attribute and hitting in the same window rather than other window.
    // Two methods we can use 1. target attribute remove and 2. is getting url of attribute and hiting url on the same window.
    // If two urls are different in the same scripts , then cypress will not visit() two different urls in same test cases as it will throw error 
    // saying that is security reasons.

  









  })
})