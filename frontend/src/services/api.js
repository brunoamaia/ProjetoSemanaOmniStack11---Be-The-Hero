// Gerenciamento de Integração com serviços externos

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/',   // Informa o endereço de onde está rodando o "home" do back-en
})

export default api;