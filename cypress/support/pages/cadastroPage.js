
class cadastroPage{ // Criado a classe LoginPage

  fillForm(cadastroData){ // função que recebe como parametro, os dados de acesso, de acordo com o que foi atribuido na spec

    // aqui o cy pega o elemento pelo id, verifica se esse elemento é visivel (para podermos pegar um erro caso não esteja) e envia o e-mail
    cy.get('input[id="email_create"]') 
    .should('be.visible')
    .type(cadastroData.email)

   
    // Realiza os passos acima, e envia a senha
  
  }

  fillFormCreateUser(cadastroData){
    cy.get('input[id="customer_firstname"]') 
    .should('be.visible')
    .type(cadastroData.firstName)

    cy.get('input[id="customer_lastname"]') 
    .should('be.visible')
    .type(cadastroData.lastName)


    cy.get('input[id="passwd"]') 
    .should('be.visible')
    .type(cadastroData.passwd)

    cy.get('input[id="firstname"]') 
    .should('be.visible')
    .type(cadastroData.firstNameAdress)

    cy.get('input[id="lastname"]') 
    .should('be.visible')
    .type(cadastroData.lastNameAdress)


    cy.get('input[id="address1"]') 
    .should('be.visible')
    .type(cadastroData.adress)

    cy.get('input[id="city"]') 
    .should('be.visible')
    .type(cadastroData.city)

    cy.get('select[id="id_state"]') 
    .select('Florida')


    cy.get('input[id="postcode"]') 
    .should('be.visible')
    .type(cadastroData.postCode)


    cy.get('input[id="alias"]') 
    .should('be.visible')
    .type('Alias')

  }

  submitForm(){
    // a função localiza o button e realiza o click
    cy.get('button[id="SubmitCreate"]')
    .click();
  }

  submitAccount(){
    cy.get('button[id="submitAccount"]')
    .click();

  }

  checkMessage(data){

    // aqui recebemos a mensagem como parametro, e validamos se ela aparece na tela
    cy.get('ol > li')
    .should('be.visible')
    .should('have.text', data.message)

  }


}

export default new cadastroPage();