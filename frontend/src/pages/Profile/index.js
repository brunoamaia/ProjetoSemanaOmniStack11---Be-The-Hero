// Página de Perfil

import React, { useEffect, useState } from 'react';   // useEffect dispara alguma função, em um determinado momento
import { Link, useHistory } from 'react-router-dom';    // Importa o "link" que permite que não seja necessário recarregar toda a página
import { FiPower, FiTrash2, FiEdit }  from 'react-icons/fi'; //importar o icone de "Log In" do "Feather Icons"
import './styles.css';

import api from '../../services/api';       // importar a comunicação com o back-end
import LogoImg from '../../assets/logo.svg';        // Importar a logo


export default function Profile () {

    const [ incidents, setIncidents ] = useState([]);

    const ongId = localStorage.getItem('ongId'); // Pegar o ID da ONG que já foi informada ao fazer o Login
    const ongName = localStorage.getItem('ongName'); // Pegar o nome da ONG que já foi informada ao fazer o Login
    
    //const history = useHistory();
    

    useEffect(() => { 
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId] ); // qual função será executada, e quando. No caso, excuta quando muda o prametro dessa linha (onId)

    /* async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers : {
                    Authorization : ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente');
        }
    }*/

    /*function handleUpdateIncident(incident) {
        history.push({
            pathname: "/incidents/new",
            inc: incident
        });
    }*/

    /*function handleLogout() {   // Sair da seção
        localStorage.clear();
        history.push('/');
    }*/

    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            
            <ul>
            {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat(
                            'pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL'
                                }).format(incident.value)}</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}    
            </ul>
            
        </div>
    );      // Normanmente as listagens são feitas em "li" dentro de "ul"
}















// percorre todos os casos, e retorna cada um, da seguinte forma (como JSX)

/**     Forma de pasar manualmente os casos
                <li>
                    <strong>Caso: 5</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Teste dos casos</p>

                    <strong>Valor:</strong>
                    <p>120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
 */



 /**
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{incident.value}</p>

                        <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
 
 */