
class HomePage {
  checkUser(data) {

    cy.contains('span', data.nameAccount)
      .should('be.visible')

  }
}

export default new HomePage();