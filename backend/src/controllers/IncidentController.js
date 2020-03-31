// Gerencia as ações relacionadas as ONG's

const connection = require('../database/connection');   // Permite ralizar operações com o banco de dados

module.exports = {  // Exportar o resultado da ação seleionada
    async index(request, response){     // Lista os casos
        const { page = 1 } = request.query;     // Verifica em qual página estamos, caso não seja passado nenhum parametro de página, fica nas primeira (pgae = 1)
        
        const [count] = await connection('incidents').count();  // verifica a quantidade total de casos. Utiliza [a] para pegar a primeira posição de um vetor, essa posição da a quantidade.
        // console.log(count);      // Apaprecer no console a quantida de de casos

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')       // Trazer os casos da ONG que possuem o ID do caso
            .limit(5)       // Quantidade a ser exibida em cada pagina
            .offset( (page-1)*5 )   // quantidade de casos a serem pulados
            .select([                           // Como os dois Bancos de Dados tem "id", devemos pegar apenas o do caso, senão o "id" da ONG irá sobreescrever
                'incidents.*',      // Pega todos os dados do caso
                'ongs.name',        // Nome da ONG
                'ongs.email',       //email da //
                'ongs.whatsapp',    // whatsap da ONG
                'ongs.city',        // cidade da ONG
                'ongs.uf'           // UF da ONG
            ]);

        response.header('X-Total-Count', count['count(*)']);    // Envia para o cabeçalho a quantidade de intens encontrados            
        return response.json(incidents);
    },

    
    async create(request, response) {   // Criar um caso / incidente
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;    // Verifica/pega o ID da ong que está criando

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {       // Apaga um caso
        const { id } = request.params;  // número do caso
        const ong_id = request.headers.authorization;

        const incident = await connection ('incidents')
            .where('id', id)        // Pegar o número do caso
            .select('ong_id')       // o ID da ONG
            .first();               // e selecionar o resultado, que só tem como ser um caso

        if (incident.ong_id != ong_id) {    // Se o ID da ONG do caso, for diferente do ID da ONG que está pedindo para apagar, vamos cancelar a operação
            return response.status(401).json({ error: 'Você não possui autorização para realizar esta ação!' });
        }                        // 401 - código HTTP de "sem autorização"
        
        await connection('incidents').where('id', id).delete();
        return response.status(204).send();     // Colocar mensagem depois
                                // 204 - quando eralizou uma ação, mas ela não tem uma resposta (não pede nada do backend)                                
    }
}