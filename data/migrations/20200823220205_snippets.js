exports.up = function(knex, Promise) {
    return knex.schema.createTable("snippets", tbl => {
        tbl.increments();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
        tbl.integer("authorization_id")
            .references("id")
            .inTable("snippet_authorization")
            .notNullable();
        tbl.varchar("title")
            .notNullable();
        tbl.varchar("description")
            .notNullable();
        tbl.varchar("code")
            .notNullable();
        tbl.timestamp('created_at')
            .notNullable()
            .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("snippets");
};
