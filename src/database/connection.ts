import knex from 'knex';

const connection = knex({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '1234',
        database : 'nlw'
    },
});

export default connection;