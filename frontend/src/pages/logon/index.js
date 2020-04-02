// Página de Loguin

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';    // Importa o "link" que permite que não seja necessário recarregar toda a página
import { FiLogIn }  from 'react-icons/fi'; //importar o icone de "Log In" do "Feather Icons"
import './styles.css';

import api from '../../services/api';       // importar a comunicação com o back-end
import heroesImg from '../../assets/heroes.png';    // Importar imagem 
import LogoImg from '../../assets/logo.svg';        // Importar a logo

export default function Logon(){

    // Variável para armazenar os valor que será repassado
    const [ id, setId ] = useState('');
    
    const history = useHistory();   // Forma de passar para outra página. nesse caso, vai para os caos da ONG.

    async function handleLogin (e) {    // função responsável por verificar se o usuário existe. É acionada após usuários clicar em "Entrar"
        e.preventDefault();      // Evita que a página fique recarregando

        try {
            const response = await api.post('sessions', { id } )
            localStorage.setItem('ongId', id);      // Salva o ID da ong no noavegador
            localStorage.setItem('ongName', response.data.name);    // Salva o Nome da ong no noavegador
            //console.log(response.data.name);    // Manda o nome da ONG para o navegador, mas não exibe em nenhum lugar

            history.push('profile');    // Redireciona para a página de Casos

        } catch (err) {
            alert('Falha no login, tente novamente!');
        };

    };

    return(
        <div className="logon-container"> 
            <section className="form">
                <img src={LogoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin} >
                    <h1>Faça seu logon</h1>

                    <input
                        placeholder="Sua ID"
                        value = {id}
                        onChange = { e => setId(e.target.value) }
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className='back-link' to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}