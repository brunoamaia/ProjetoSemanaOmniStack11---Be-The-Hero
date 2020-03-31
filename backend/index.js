/**     Como criar um aplicação: 
 *  1º) criamos o arquivo de incialização (package.json)
 *          utilizamos o comando: npm init -y
 *          vai criar o arquivo inicial passsando alguns parametros genericos
 * 
 *  2º) instalamos o "express"
 *          utilizamos o comando: npm install express
 *          ele é responsável por interpretar e controlar as rotas/endereços e parametros que podem ser passados
 *              Ex: meuprojeto.com/contato?id=2
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

const express = require('express');     // Importar o modulo express, para a variável express
                                        // A variável express (variável local) passa a ter todas as funções do módulo importado

const app = express();      // instancia os comandos, para o comando app

app.get('/', (request, response) => {       // Utiliza o express para acessar a primeira rota ('/'), que nesse caso é a página raiz
    return response.jason({                 // Utiliza o json para retornar obejetos. Utiliza o json pela interatividade com o frontend
        evento: 'Semana OmniStack 11',
        aluno: 'Bruno'
    })

})

app.listen(3333);       // Utiliza a porta 3333 para executar a aplicação (http://localhost:3333)
