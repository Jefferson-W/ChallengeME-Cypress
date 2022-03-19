
class LoginPage{
  fillForm(loginData){

    cy.get('input[id="email"]')
    .should('be.visible')
    .type(loginData.email)

    cy.get('input[id="passwd"]')
    .should('be.visible')
    .type(loginData.senha)
  }

  submitForm(){
    cy.get('button[id="SubmitLogin"]')
    .click();
  }

  checkMessage(data){
    cy.get('ol > li')
    .should('be.visible')
    .should('have.text', data.message)

  }


}

export default new LoginPage();