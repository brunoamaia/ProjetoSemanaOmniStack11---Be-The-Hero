// Arquivo JSX - JavaScript XML (Usa a sintaxe do HTML)
// Ou pode falar que é quando o HTML está escrito/integrado no java
 
//import React, { useState } from 'react';  // Teste de alteração de valores
import React from 'react';
import './global.css';

import Routes from './routes';

//import Logon from './pages/logon';  // ele procura automaticamente o arquivo "index.js" na página selecionada
//import logo from './logo.svg';
//import './App.css';


export default function App() {
  return(
    <Routes />
  );
}





/** teste de mudança de valores de uma variável/contador
function App() {
  //let counter = useState(0);  // Criar uma variável do tipo Array [valor, funçãoDeAtualização]
  const [counter, setCounter] = useState(0);  // Criar uma constante e uma função para poder modificar o seu valor

  function increment() {  //Criar uma função para incrementar o valor
    setCounter(counter +1);      // Não podemos manipular/operar diretamente o valor da variável
    //console.log(counter);
  }

  return (
    //<Header title="Semana OmniStack" />  // Como tem apenas um conteúdo, fechamos a "tag"
    <div> 
      <Header>
        Semana OmniStack!!!  <br />
        Contador: {counter}
      </Header> 
      <button onClick={increment}> Incrementar </button>
    </div>
  );  // Criar conteudo que ocupa mais linhas
}     // Neste caso, foi inserido o texto e um contador.
export default App; */
