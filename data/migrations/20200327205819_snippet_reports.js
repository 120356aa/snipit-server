exports.up = function(knex) {
    return knex.schema.createTable("snippet_reports", tbl => {
        tbl.timestamp("created_at").notNullable();
        tbl.integer("snippet_id")
            .references("id")
            .inTable("snippets")
            .notNullable();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("snippet_reports");
};
