// all the files called as spec file.
/// <reference types="Cypress"/>


import LoginPage from "./PageObjects/LoginPage";

describe('It my first Test on cypress', () => {
  const loginPage =new LoginPage();
  before(function() {
    

    cy.fixture('example').then(function (data)
    {
     globalThis.data=data;
    })
  })

  it('Open the APP siftedx', () => {


    // We can give time out in the it block level only so that it will wait for that time to execute .
    Cypress.config('defaultCommandTimeout',8000);
    cy.visit(globalThis.data.url)
    loginPage.enterLoginDetails(globalThis.data.email,globalThis.data.password)

   // loginPage.enterPassword(globalThis.data.password)
   // cy.get('.btn').click(); 
   cy.get('.top_heading_styles').should('include.text','Hemanth PK');
   //"USER_CREDENTIALS": { 'username': 'hemanth.pk@yopmail.com', 'password': "Prakash@1234" },
   cy.get('#sidebarMenu').find('.position-sticky').find('.nav').find('.nav-item').each(($e1, index, $list)=>{
   const linkName = $e1.find('.nav-link ').find('.ms-2').text()
      
     /* switch (linkName) {
        case Availability:
          
          break;
        case 
        default:
          break;
      }
      
       
      if(linkName!='Availability'){
        cy.wrap($e1).find('.nav-link ').click()
      }  */  
    })
      
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
      


     
  
  
  });






});


