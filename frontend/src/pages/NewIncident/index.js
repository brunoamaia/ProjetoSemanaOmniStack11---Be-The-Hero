// Página de Registro de novos casos

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';    // Importa o "link" que permite que não seja necessário recarregar toda a página
import { FiArrowLeft }  from 'react-icons/fi'; //importar o icone de "Log In" do "Feather Icons"
import './styles.css';

import api from '../../services/api';       // importar a comunicação com o back-end
import LogoImg from '../../assets/logo.svg';        // Importar a logo

export default function NewIncident () {

    const [ title, setTitle ] = useState('');   //
    const [ description, setDescription ] = useState('');   //
    const [ value, setValue ] = useState('');   //

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    
    async function handleNewIncident(e) {
        e.preventDefault(); // evita que a página seja recarregada

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');

        } catch (err) {
            alert('Erro ao cadastrar o caso, tente novamente')
        }
    }
    
    
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
                <form onSubmit={handleNewIncident}>

                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em R$"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

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