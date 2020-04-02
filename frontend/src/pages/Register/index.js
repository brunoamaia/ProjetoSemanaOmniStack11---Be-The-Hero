// Página de Registros

import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';    // Importa o "link" que permite que não seja necessário recarregar toda a página
import { FiArrowLeft }  from 'react-icons/fi'; //importar o icone de "Log In" do "Feather Icons"
import './styles.css';

import api from '../../services/api';       // importar a comunicação com o back-end
import LogoImg from '../../assets/logo.svg';        // Importar a logo


export default function Register() {

    // Variáveis para armazenar os valores que serão repassados
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUf ] = useState('');

    const history = useHistory();   // Forma de passar para outra página. nesse caso, retorna para home, quando o cadastro foi realizado.

    async function handleRegister(e){     // função responsável por realizar o cadastro do Usuário. É acionada após usuários clicar em "Cadastrar"
        e.preventDefault();     // Evita que a página fique recarregando
    
        const data = {  // Armazenará os valores informados 
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {   // Tente retornar o id do usuário
            const response = await api.post('ongs', data);  // Espera o retorno do backend, para informar o usuário
            //api.post('ongs', data)  //  informa o endereço do backend que vou usar e quais informações serão enviadas
            alert(`Seu ID de acesso: ${response.data.id}`); // Utiliza "crase" ao digitar o texto, para poder chamar variáveis também
            history.push('/');  // Volta para a rota raiz, caso consiga cadastrar
        
        } catch (err) { //Caso não consiga o ID, mostre o erro:
            alert('Erro no cadastro, tente novamente!');
        }

    }

    return (
        <div className="register-container">
            <div className="content">

                <section>
                
                    <img src={LogoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos da sua ONG.</p>
                
                    <Link className='back-link' to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Já tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleRegister}>

                    <input 
                        placeholder="Nome da ONG"
                        value = {name}
                        onChange = { e => setName(e.target.value) }
                    />

                    <input 
                        type="email"
                        placeholder="E-mail"
                        value = {email}
                        onChange = { e => setEmail(e.target.value) }
                        />

                    <input 
                        placeholder="WhatsApp"
                        value = {whatsapp}
                        onChange = { e => setWhatsapp(e.target.value) }
                    />
                        <div className="input-group">
                            <input
                                placeholder="Cidade"
                                value = {city}
                                onChange = { e => setCity(e.target.value) }
                            />

                            <input
                                placeholder="UF"
                                style={{ width: 80 }}
                                value = {uf}
                                onChange = { e => setUf(e.target.value) }
                            />
                        </div>
                    <button className="button" type="submit">Cadastrar</button>
            
                </form>

            </div>
        </div>
    );
}


/**     Forma de receber os valores digitados
 * placeholder="Nome da ONG"
 * value = {name}
 * onChange = { e => setName(e.target.value) }
 *    função escrita no fomrato reduzido
 *      - 
 * 
 */