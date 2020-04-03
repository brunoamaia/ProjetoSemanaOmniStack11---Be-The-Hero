// Gerenciamento das rotas
// Responsável por selecionar/acionar as ações

const express = require('express'); // Importar o modulo express, para a variável express

const OngController = require('./controllers/OngController');   // Chama as ações relacionadas às Ongs
const IncidentController = require('./controllers/IncidentController');     // Chama as ações relacionadas às Ongs
const ProfileController = require('./controllers/ProfileController');       // Chama a ação que lista os casos de uma ONG específica
const SessionController = require('./controllers/SessionController');       // Controle da sessão/loguin

const routes = express.Router();    // Passa as funcionalidades do Router, para a variável routes

// Controle de seção 
routes.post('/sessions', SessionController.create);

// Rotas relacionadas apenas as ONG's
routes.post('/ongs', OngController.create); // Criar uma ONG
routes.get('/ongs', OngController.index);   // Listar as ONG's

// Rotas relacionadas ao casos/incidentes
routes.post('/incidents', IncidentController.create); // Criar um caso
routes.get('/incidents', IncidentController.index);   // Listar os casos
routes.delete('/incidents/:id', IncidentController.delete); // Apagar uma caso

// Rotas relacionadas ao listamento de casos de uma ONG específica
routes.get('/profile', ProfileController.index);

module.exports = routes; // Forma de exportar uma variável no Node. No caso, as rotas

/** Exemplo de acesso de uma rota
app.get('/', (request, response) => {       // Utiliza o express para acessar a primeira rota ('/'), que nesse caso é a página raiz
    return response.jason({                 // Utiliza o json para retornar obejetos. Utiliza o json pela interatividade com o frontend
        evento: 'Semana OmniStack 11',
        aluno: 'Bruno'
    })

}) */