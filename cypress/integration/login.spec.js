/// <reference types="cypress" /> 
// utilizado para que a IDE nos auxilie

// importando as pages e os dados gerados
import loginFactory from '../factories/login'
import login from '../support/pages/loginPage'
import home from '../support/pages/homePage'

describe('Login', () => {
  beforeEach('visitando a pagina', () => { // utilizando o hook before, pois sempre terá que acessar a pagina
    cy.visit('?controller=authentication') 
  })

  it('login com sucesso', () => {
    const loginData = loginFactory.gui_success(); // pegando os dados gerados que geram o acesso com sucesso

      login.fillForm(loginData); // utilizando a função da loginPage que preenche o formulario, e enviando os dados com argumentos
      login.submitForm(); // função que envia o formulario
      home.checkUser(loginData); // função que valida o usuário logado, através da HomePage
 
  })

  it('login inválido', () => {
    const loginData = loginFactory.gui_invalid(); // pegando os dados gerados que geram o erro de acesso

    login.fillForm(loginData); // utilizando a função da loginPage que preenche o formulario, e enviando os dados com argumentos
    login.submitForm(); // função que envia o formulario
    login.checkMessage(loginData) // utilizado a função checkMessage, que verifica o erro gerado

  })

  it('login em branco', () => {
    const loginData = loginFactory.gui_blank(); // pegando os dados gerados que geram o erro de acesso

    login.fillForm(loginData); // utilizando a função da loginPage que preenche o formulario, e enviando os dados com argumentos
    login.submitForm(); // função que envia o formulario
    login.checkMessage(loginData) // utilizado a função checkMessage, que verifica o erro gerado


  })
})