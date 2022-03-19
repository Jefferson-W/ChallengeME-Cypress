/// <reference types="cypress" />

import loginFactory from '../factories/login'
import login from '../support/pages/loginPage'
import home from '../support/pages/homePage'

describe('Login', () => {
  beforeEach('visitando a pagina', () => {
    cy.visit('?controller=authentication')
  })

  it('login com sucesso', () => {
    const loginData = loginFactory.gui_success();

      login.fillForm(loginData);
      login.submitForm();
      home.checkUser(loginData);
 
  })

  it('login inválido', () => {
    const loginData = loginFactory.gui_invalid();

    login.fillForm(loginData);
    login.submitForm();
    login.checkMessage(loginData)

  })

  it('login em branco', () => {
    const loginData = loginFactory.gui_blank();

    login.fillForm(loginData);
    login.submitForm();
    login.checkMessage(loginData)


  })
})