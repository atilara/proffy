import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('classes', (table) => {
		table.increments('id').primary();
		table.string('subject').notNullable();
		table.decimal('cost').notNullable();

		// Relacionamento, qual professor dá essa aula? Criação de foreign key
		table
			.integer('user_id')
			.notNullable()
			.references('id')
			.inTable('users')
			// o que acontece com as aulas de um usuário que é atualizado?
			// irá refletir nos outros lugares onde o user é mencionado
			.onUpdate('CASCADE')
			// o que acontece com as aulas de um usuário que é deletado?
			// Na opção cascade elas tbm são removidas
			.onDelete('CASCADE');
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('classes');
}
