const connection = require('../database/connection');   // Permite ralizar operações com o banco de dados


module.exports = {  // Exportar o resultado da ação seleionada
    async index(request, response){     // Lista as ONG's
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    },
}