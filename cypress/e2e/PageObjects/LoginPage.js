class LoginPage{

 

enterUserName(text){

    cy.enterText('#FirstName',text)
    //return cy.get("#FirstName");
}

enterPassword(text){

    cy.enterText('#password',text)
    //return cy.get('#password')
}


enterLoginDetails(username,password){
    cy.enterText('#FirstName',username) 
    cy.enterText('#password',password)
    cy.get('.btn').click();

}





}
export default LoginPage;