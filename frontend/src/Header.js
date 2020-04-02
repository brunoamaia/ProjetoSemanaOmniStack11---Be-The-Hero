// Cabeçalho de teste 
import React from 'react';  // devom importar em todos os locais do JSX

export default function Header({ children }){ //especificar qual propriedade será importada. Children importa todo o conteudo inserido.
    return(         // importamos o texto do Header (em App.js)
        <header>
            <h1> {children} </h1>  
        </header>
    );      // Usamos as {} para utilizar uma variável java em HTML
}

// export default Header;       // Podemos exportar no final ou no começo (como foi feito na função)