const faker = require('faker');


export default {
  gui_success() {
    const data = {
      email: 'jefferson.lsilva@me.com.br',
      senha: '123456',
      nameAccount: 'Jefferson Silva'
    }
    return data;
  },

  gui_invalid() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const randomNumber = faker.datatype.number({ min: 1000, max: 10000 })
    const userName = `¨@#${firstName}${lastName}${randomNumber}email`
    const data = {
      email: userName,
      senha: userName,
      message: 'Invalid email address.'
    };
    return data;
  },

  gui_blank() {
    const data = {
      email: ' ',
      senha: ' ',
      message: 'An email address required.'
    };
    return data;
  }
};