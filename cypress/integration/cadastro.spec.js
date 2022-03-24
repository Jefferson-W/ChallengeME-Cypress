/// <reference types="cypress" /> 

import cadastroFactory from '../factories/cadastro'
import cadastro from '../support/pages/cadastroPage'


describe('cadastro', () => {
  beforeEach('visitando a pagina', () => { 
    cy.visit('?controller=authentication') 
  })

  it('cadastro com sucesso', () => {
    const cadastroData = cadastroFactory.gui_createAccountSucess(); 

    cadastro.fillForm(cadastroData); 
    cadastro.submitForm();  
    cadastro.fillFormCreateUser(cadastroData); 
    cadastro.submitAccount();
  })

  it('cadastro com dados faltantes', () => {
    const cadastroData = cadastroFactory.gui_createAccountError(); 

    cadastro.fillForm(cadastroData); 
    cadastro.submitForm(); 
     
    cadastro.fillFormCreateUser(cadastroData); 
    cadastro.submitAccount();
    cadastro.checkMessage(cadastroData)
  })


  
})