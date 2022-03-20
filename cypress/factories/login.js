const faker = require('faker'); // Utilizando a lib para gerar os dados fakes


export default {
  gui_success() { // padrão gui (interface) e função gui_success para enviar os dados que geram o acesso valido
    const data = {
      email: 'jefferson.lsilva@me.com.br',
      senha: '123456',
      nameAccount: 'Jefferson Silva'
    }
    return data;
  },

  gui_invalid() { // padrão gui (interface) e função gui_invalid para enviar os dados que geram o acesso invalido
    const firstName = faker.name.firstName(); // pegando o nome pela lib e atribundo a varial
    const lastName = faker.name.lastName(); // pegando o ultimo nome pela lib e atribundo a varial
    const randomNumber = faker.datatype.number({ min: 1000, max: 10000 }) // gerando um numero aleatório para que os dados fiquem mais dificeis de se repetir
    const userName = `¨@#${firstName}${lastName}${randomNumber}email` // concatenando as informaões
    const data = {
      email: userName,
      senha: userName,
      message: 'Invalid email address.' // mensagem de erro que é retornado com esses dados
    };
    return data;
  },

  gui_blank() { // padrão gui (interface) e função gui_blank para enviar os dados que geram o acesso invalido por dados vazios
    const data = {
      email: ' ', // adicionado um " ", pois vazio o cypress gera um erro.
      senha: ' ',
      message: 'An email address required.' // mensagem de erro retornada com esses dados.
    };
    return data;
  }
};