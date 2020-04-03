// Página de Perfil

import React, { useEffect, useState } from 'react';   // useEffect dispara alguma função, em um determinado momento
import { Link, useHistory } from 'react-router-dom';    // Importa o "link" que permite que não seja necessário recarregar toda a página
import { FiPower, FiTrash2 }  from 'react-icons/fi'; //importar o icone de "Log In" do "Feather Icons"
import './styles.css';

import api from '../../services/api';       // importar a comunicação com o back-end
import LogoImg from '../../assets/logo.svg';        // Importar a logo


export default function Profile () {

    const [ incidents, setIncidents ] = useState([]);   //

    const ongId = localStorage.getItem('ongId'); // Pegar o ID da ONG que já foi informada ao fazer o Login
    const ongName = localStorage.getItem('ongName'); // Pegar o nome da ONG que já foi informada ao fazer o Login
    
    const history = useHistory();       // Redirecionar
    

    useEffect(() => {               // Procurar/listar os casos da ONG
        api.get('profile', {      // endereço que irá pegar os casos listados
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId] ); // qual função será executada, e quando. No caso, olha os casos da ONG quando muda o Id  da ONG

    function handleLogout() {   // Sair da seção
        localStorage.clear();   // Basta apagar os dados que foram passados para o navegador
        history.push('/');      // Redireciona para a Home
    }

    async function handleDeleteIncident(id){    // Apagar um Caso
        try {
            await api.delete(`incidents/${id}`, {
                headers : {
                    Authorization : ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));  // Após apagar um caso atualiza a lista de casos na página

        } catch (err) {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    /*function handleUpdateIncident(incident) {
        history.push({
            pathname: "/incidents/new",
            inc: incident
        });
    }*/

    
    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                <button onClick={handleLogout} type="button">
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
                        <p>{Intl.NumberFormat(      // Função que ajusta o formato de moeda
                            'pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL'
                                }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}    
            </ul>
            
        </div>
    );      // Normanmente as listagens são feitas em "li" dentro de "ul"
}















// percorre todos os casos, e retorna cada um, da seguinte forma (como JSX)


// button onClick = {() => handleDeleteIncident(incident.id)} type="button">
//      Chama a função de apagar. Para passar o parametro (id do caso), utiliza uma "error function", pois, senão a uitilizar, apagaria todos os casos


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