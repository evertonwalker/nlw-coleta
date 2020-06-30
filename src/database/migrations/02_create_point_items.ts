import Knex from 'knex'

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id').unsigned().references('id').inTable('points');
        table.integer('item_id').unsigned().references('id').inTable('items');
    });
}

export async function down(knex: Knex) {
    // USADO PARA ALTERAR CAMPOS DA TABELA, ( DELETAR E ETC);
    return knex.schema.dropTable('point_items');
}