/// <reference types="cypress" /> 

import loginFactory from '../factories/cadastro'
import cadastro from '../support/pages/cadastroPage'


describe('cadastro', () => {
  beforeEach('visitando a pagina', () => { 
    cy.visit('?controller=authentication') 
  })

  it('cadastro com sucesso', () => {
    const loginData = loginFactory.gui_createAccountSucess(); 

    cadastro.fillForm(loginData); 
    cadastro.submitForm();  
    cadastro.fillFormCreateUser(loginData); 
    cadastro.submitAccount();
  })

  it('cadastro com dados faltantes', () => {
    const loginData = loginFactory.gui_createAccountError(); 

    cadastro.fillForm(loginData); 
    cadastro.submitForm(); 
     
    cadastro.fillFormCreateUser(loginData); 
    cadastro.submitAccount();
    cadastro.checkMessage(loginData)
  })


  
})