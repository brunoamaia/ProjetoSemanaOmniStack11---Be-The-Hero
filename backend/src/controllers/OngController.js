// Gerencia as ações relacionadas as ONG's

const crypto = require('crypto'); // Importado para gerar uma chave única para cada Ong
const connection = require('../database/connection');   // Permite ralizar operações com o banco de dados


module.exports = {  // Exportar o resultado da ação seleionada
    async index(request, response){     // Lista as ONG's
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    
    async create(request, response) {   // Criar uma ONG
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');   // Criar a chave única

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
}