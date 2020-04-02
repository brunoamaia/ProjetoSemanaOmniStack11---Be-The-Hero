// Página de Registro de novos casos

import React from 'react';
import { Link } from 'react-router-dom';    // Importa o "link" que permite que não seja necessário recarregar toda a página
import { FiArrowLeft }  from 'react-icons/fi'; //importar o icone de "Log In" do "Feather Icons"
import './styles.css';

import LogoImg from '../../assets/logo.svg';        // Importar a logo

export default function NewIncident () {
    return (
        <div className="new-incident-content">
            <div className="content">

                <section>

                    <img src={LogoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente, para encontrar um herói que irá salvar o dia!</p>

                    <Link className='back-link' to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o meu Perfil
                    </Link>

                </section>
                <form>

                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em R$" />

                    <button className="button" type="submit">Cadastrar</button>

                </form>

            </div>
        </div>
    );
}


/**
// Página de Registro de novos casos

import React from 'react';
import { Link } from 'react-router-dom';    // Importa o "link" que permite que não seja necessário recarregar toda a página
import { FiPower, FiTrash2 }  from 'react-icons/fi'; //importar o icone de "Log In" do "Feather Icons"
import './styles.css';

import LogoImg from '../../assets/logo.svg';        // Importar a logo

export default function Profile () {
    return (
        <div className="profile-container">

        </div>
    );
}
 */