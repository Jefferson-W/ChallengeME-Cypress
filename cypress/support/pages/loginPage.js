
class LoginPage{ // Criado a classe LoginPage

  fillForm(loginData){ // função que recebe como parametro, os dados de acesso, de acordo com o que foi atribuido na spec

    // aqui o cy pega o elemento pelo id, verifica se esse elemento é visivel (para podermos pegar um erro caso não esteja) e envia o e-mail
    cy.get('input[id="email"]') 
    .should('be.visible')
    .type(loginData.email)

    // Realiza os passos acima, e envia a senha
    cy.get('input[id="passwd"]')
    .should('be.visible')
    .type(loginData.senha)
  }

  submitForm(){
    // a função localiza o button e realiza o click
    cy.get('button[id="SubmitLogin"]')
    .click();
  }

  checkMessage(data){

    // aqui recebemos a mensagem como parametro, e validamos se ela aparece na tela
    cy.get('ol > li')
    .should('be.visible')
    .should('have.text', data.message)

  }


}

export default new LoginPage();