// Primeiro arquivo Java lido pelo HTML

import React from 'react';
import ReactDOM from 'react-dom';   // Integração do React com o Navegador
                                    // dom é a "árvore de elementos"
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(      // Vai renderizar (colocar na tela) as infomações a seguir ...
  <App />,  // Geralmente, os arquivos do React tem a primeira letra maiuscula
  document.getElementById('root')   // Buscando o arquivo "App" e colocando dentro do "root"
);


/**   Estrutura gerada pelo React
ReactDOM.render(      // Vai renderizar (colocar na tela) as infomações a seguir ...
  <React.StrictMode>  
    <App />
  </React.StrictMode>,  // Geralmente, os arquivos do React tem a primeira letra maiuscula
  document.getElementById('root')   // Buscando o arquivo "App" e colocando dentro do "root"
); */


//      Na pasta src
//
// Apagar     App.css
// Apagar     App.test.js
// Apagar     Index.css
// Apagar     Logo.svg
// Apagar     serviceWorker.js
// Apagar     setupTests.js
//
// Ou seja, deixe apensa "App.js" e "index.js"


//    Na pasta public
//
// Apagar     logo192.png
// Apagar     logo512.png
// Apagar     manifest.json
// Apagar     robots.txt

/**
 * 
 *  Instalar biblioteca de icones disponíveis para o React
 *      executar na pasta (frontend): npm install react-icon
 * 
 *  Instalar o pacote resopnsável por gerenciar as rotas no React
 *      executar na pasta (frontend): npm install react-router-dom
 * 
 *  Insatalar o pacote que fará a comunicação do front-end com o back-en
 *    executar na pasta (frontend): npm install axios
 *      Para que a comunicação aconteça, é necessário deixar o bak-end rodando
 *      - Cia o arquivo "api.js" dentro da pasta "service", que está em "src"
 * 
 * 
 */