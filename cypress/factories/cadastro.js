const faker = require('faker'); // Utilizando a lib para gerar os dados fakes


export default {

  gui_createAccountSucess() {

    const firstName = faker.name.firstName(); // pegando o nome pela lib e atribundo a varial
    const lastName = faker.name.lastName(); // pegando o ultimo nome pela lib e atribundo a varial
    const randomNumber = faker.datatype.number({ min: 1000, max: 10000 }) // gerando um numero aleatório para que os dados fiquem mais dificeis de se repetir
    const userName = `¨@#${firstName}${lastName}${randomNumber}email` // concatenando as informaões
    const data = {
      firstNameAdress: 'Vila olimpia',
      lastNameAdress: 'testes',
      adress: 'rua gomes de carvalho',
      city: 'Sao Paulo',
      postCode: '32207',
      phone: '1234567899',
      lastName: lastName,
      passwd: userName,
      firstName: firstName,
      email: faker.internet.email(userName),
    };
    return data;
  },

  
  gui_createAccountError() {

    const firstName = faker.name.firstName(); // pegando o nome pela lib e atribundo a varial
    const lastName = faker.name.lastName(); // pegando o ultimo nome pela lib e atribundo a varial
    const randomNumber = faker.datatype.number({ min: 1000, max: 10000 }) // gerando um numero aleatório para que os dados fiquem mais dificeis de se repetir
    const userName = `¨@#${firstName}${lastName}${randomNumber}email` // concatenando as informaões
    const data = {
      firstNameAdress: 'Vila olimpia',
      lastNameAdress: 'testes',
      adress: 'rua gomes de carvalho',
      city: 'Sao Paulo',
      postCode: '32207',
      phone: '1234567899',
      lastName: lastName,
      passwd: userName,
      firstName: firstName,
      email: faker.internet.email(userName),
      message: 'You must register at least one phone number.' // mensagem de erro que é retornado com esses dados
    };
    return data;
  }

};