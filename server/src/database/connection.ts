import knex from 'knex';
import path from 'path';

// Conexão com o banco de dados
const database = knex({
	client: 'sqlite3',
	connection: {
		filename: path.resolve(__dirname, 'database.sqlite'),
	},
	// Campos padrão serão nulos
	useNullAsDefault: true,
});

export default database;
