const knex = require('knex'); // Passar as funções do pacote, para a função
const configuration = require('../../knexfile'); //Pegar as configurações de Banco de Dados que foram criadas no arquivo "knesfile.js"

const connection = knex(configuration.development); // connection usa o knex para pegar as cofgunrações de desenvolvimento


module.exports = connection;    // exporta a conexão com o banco de dados
