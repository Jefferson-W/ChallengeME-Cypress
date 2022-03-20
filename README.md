# Automation Challenge


## Objetivo

Criar um projeto de automação utilizando como base o site **Automation Practice**.
Efetue um cadastro de usuário.

É necessário conter no mínimo os seguintes cenários

* `Login com sucesso`
* `Login inválido`
* `Login em Branco`

### Como inicializar?

Primeiro, é necessario ter o Node instalado [Node](https://nodejs.org/en/)


Faça um clone do repositorio com o comando abaixo::
### `git clone https://github.com/Jefferson-W/ChallengeME-Cypress.git`

Para instalar as dependências use :
### `npm install`

Agora, basta digitar o comando abaixo, para rodar o Cypress e a Spec.
### `npm run test`

Para rodar o teste por "baixo dos panos" (fora do Browser), utilize o comando abaixo.
### `npm run cy:run`



### Tecnologias

- Cypress: Framework utilizado para rodar os testes;
- Javascript: linguagem utilizada junto com  o framework;
- Arquivo com massa de dados: Gerado o arquivo em cypress/factories/login.js contendo a massa de dados para os testes;
- Page Objects;
- Evidencias do teste: Gerado o arquivo em cypress/videos/login.spec.js.mp4;
- Faker: lib faker, para gerar dados ficticios auxiliando na criação da massa de dados;



