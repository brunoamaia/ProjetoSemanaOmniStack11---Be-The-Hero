// Arquivo Principal
// É responsável por inicializar a aplicação

const express = require('express');     // Importar o modulo express, para a variável express
    // A variável express (variável local) passa a ter todas as funções do módulo importado

const cors = require('cors');           // A variável cors recebe as funcionalidades do módulo cors
    // esrte módulo gerencia quem tem acesso à aplicação

const routes = require('./routes'); // Importar as rotas. O "./" informa que o programa deve acessar um arquivo, e não um pacote

const app = express();      // instancia os comandos, para o comando app

/**  Forma de utilizar o Cors
app.use(cors({
    origin: 'http://meuapp.com'     // endereço de onde está rodando/armazenado o forntend
})); */

app.use(cors());            // deixa sem nehum parametro, por estar no desenvolvimento
app.use(express.json());    // CO express vai começar a converter o Json em um objeto para o Java
app.use(routes);            // Utiliza as rotas criadas


app.listen(3333);       // Utiliza a porta 3333 para executar a aplicação (http://localhost:3333)

/** Exemplo de rota
 * As rotas ficam no arquivos "routes.js" para um melhor gerenciamento
app.get('/', (request, response) => {       // Utiliza o express para acessar a primeira rota ('/'), que nesse caso é a página raiz
    return response.jason({                 // Utiliza o json para retornar obejetos. Utiliza o json pela interatividade com o frontend
        evento: 'Semana OmniStack 11',
        aluno: 'Bruno'
    })

}) */



/**    htttp://www.meuapp.com/cadastro
 *                      rota / recurso
 */

/**     Métodos HTTP
 *  GET - Buscar ou listar uma informação
 *  POST - Criar uma informação
 *  PUT - Alterar uma informação
 *  DELETE - Deletar uma informação
 */

/**     Tipos de parâmetro
 *  Query Params - Parâmetros nomeados enviados na rota após o "?" usados em filtros e paginações, por exemplo.
 *  Route Params - Parâmetros utilizados para identificar recursos.
 *  Request Body - Corpo da requisição utilizado para criar ou alterar recursos.
 */

/**     Banco de Dados
 *  Driver é o pacote oficial de banco de Dados para o Nodemon, a sintaxe pode mudar em alguns BD
 *          SELECT * FROM users
 * 
 *  Query Builder (Knex) - escreve as "query" utilizando a sintaxe de Java
 *          table('users').select('*').where();
 */


/**     Como criar um aplicação: 
 *  1º) criar o arquivo de incialização (package.json) - [bakend]
 *          utilizamos o comando: npm init -y
 *          vai criar o arquivo inicial passsando alguns parametros genericos
 * 
 *  2º) instalar o "express"     - [bakend]
 *          utilizamos o comando: npm install express
 *          ele é responsável por interpretar e controlar as rotas/endereços e parametros que podem ser passados
 *              Ex: meuprojeto.com/contato?id=2
 * 
 *  3º) instalar o react         - [frontend]
 *          na pasta raiz, executa o seguinte comando: npx create-react-app frontend
 *              vai criar a pasta do frontend com o React
 * 
 *  4º) instalar o Nodemon - [bakend]
 *          voltando para o backend, executamos o comando: npm install nodemon -D
 *          o Nodemon vai fazer com que a página fique funcionando
 *              e se atualizando constantemente, não sendo mais necessário
 *              executar toda hora a página (node index.js)
 *          o comando "-D" serve para istalar o Nodemon na parte de Desenvolvimento (dentro do package.json)
 *          
 *           Devemos entrar no "package.json" e no primeiro bloco, substituimos 
 *                      -> "test": "echo \"Error: no test specified\" && exit 1"
 *                  por -> "start": "nodemon index.js"
 *              a partir de então, usamos o comando: npm start
 *              para executar a página
 *  
 *  5º) instalr o Knex (Query builder) para trabalhar com Banco de Dados - [bakend]
 *              executamos o comando: npm install knex
 *      - Devemos intalar o driver do banco de dados que será utilizado
 *       como utilizaremos nesse caso o Sqlite3, intalaremos seu respectivo driver
 *              executamos o comando: npm install sqlite3
 *      - Para inciar a conexão com o banco de dados, devemos iniciar o Knex
 *              executamos o comando: npx knex init
 *         Vai criar o arquivo "knexfile.js" que guarda as configurações de acesso para os bancos de dados
 * 
 *  6º) Começa a reeestruturar o código
 *          - Cria a pasta "src" (searce), que é onde ficaram os arquivos do código
 *          - Passa o index.js para dentro da "src" e atualiza seu endereço no "package.json"
 *                              em "start", para        -> "star": "nodemon src/index.js"
 *          - Cria o arquivo "routes.js" dentro do "src"
 *                      será responsável por gerenciar as rotas (ações/caminhos executadas quando algum comando ou recurso é enviado)
 *          - Cria a pasta "database" dentro de "src"
 *                      em "knexfile.js" na parte de development, colocamos o endereço e o nome do banco de dados
 *                          em "filename" -> './src/database/db.sqlite'
 *                          podemos colocar o nome, sem ter criado o arquivo, ele posterioemente será criado automaticmente.
 * 
 *          - Listar entidades e Funcionalidades
 * 
 *  7º) Criar as "migrations". Elas registram as mudanças no BD e as ordena
 *          Criar a pasta "migrations", dentro da pasta "database"
 *          Dentro do "knexfile.js" criamos a parte relacionada às mirations
 *          Depois de de connection, em Deevelopment, passamos o seguinte:
 *   migrations: {
 *     directory: './src/database/migrations'
 *   }
 *   useNullAsDefault: true,                //Deixa os valores padrões como nulo
 *  
 *          Depois, criamos as migrations com o comando:
 *                          npx knex migrate:make create_ongs           // create_ong   é o nome da migration criada       
 *              Configuramos então a migration
 *          Após configurar, criamos o Bancode dados utilizando o comando: 
 *                          npx knex migrate:latest     // este comando cria o banco de dados mais recente (carrega todas as modificações realizadas)
 *          Repetimos para todas as migrations, neste caso, temos mais uma (incidents)
 *                          npx knex migrate:make create_incidents      //configuramos
 *                          npx knex migrate:latest
 * 
 *  -> npx knex          // lista todos os comandos (ver como trabalhar com as migrations)
 *  -> npx knex migrate:rollback    // volta para uma venrsão anterior
 *  -> npx knex migrate:status      // lista as modicações realizadas (versões, e não cada mudança)
 *      ...
 * 
 *  8º) Criar o arquivo "connection.js", que vai gerenciar as coneções com o Banco de Dados
 * 
 *  9º) Instalar o módulo Cors
 *              utilizamos o comando: npm install cors
 *          Ele determina quem pode acessar a aplicação
 * 
 *  OBS: Para instalar os pacotes, ou executar comandos pelo terminal, 
 *          é necessário parar a execução da aplicação.
 * 
 */