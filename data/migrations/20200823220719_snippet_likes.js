exports.up = function(knex, Promise) {
    return knex.schema.createTable("snippet_likes", tbl => {
        tbl.integer("snippet_id")
            .references("id")
            .inTable("snippets")
            .notNullable()
            .index();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
        tbl.boolean("view_status")
            .notNullable();
        tbl.timestamp("created_ad")
            .notNullable()
            .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("snippet_likes");
};
