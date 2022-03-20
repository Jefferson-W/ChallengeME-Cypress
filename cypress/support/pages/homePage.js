
class HomePage { // criando a classe HomePage, por se tratar de uma outra pagina

  checkUser(data) {

      // a função verifica se o nome do usuário está visivel (clean code)
    cy.contains('span', data.nameAccount)
      .should('be.visible')

  }
}

export default new HomePage();