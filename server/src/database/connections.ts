import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    //O sqlite nao sabe o q preencher nos campos não preenchidos, entao coloca isso para colocar null
    useNullAsDefault: true      
})

export default db;