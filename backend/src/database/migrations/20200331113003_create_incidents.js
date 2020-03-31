
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();                 // Incremento - contador de casos adicionados

        table.string('title').notNullable();        // Informações do caso/incidente 
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); // Relacionamento com a tabela ongs

        table.foreign('ong_id').references('id').inTable('ongs'); // Chave estrangeira
                    // O ong_id anterior, referencia o id dessa tabela com o ong_id de ongs
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');  // Deleta a tabela
};
