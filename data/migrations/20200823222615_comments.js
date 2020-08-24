exports.up = function(knex, Promise) {
    return knex.schema.createTable("comments", tbl => {
        tbl.increments();
        tbl.integer("snippet_id")
            .references("id")
            .inTable("snippets")
            .notNullable();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
        tbl.varchar("comment")
            .notNullable();
        tbl.timestamp("created_at")
            .notNullable()
            .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("comments");
};
