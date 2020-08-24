exports.up = function(knex, Promise) {
    return knex.schema.createTable("snippet_likes", tbl => {
        tbl.boolean("view_status")
            .notNullable();
        tbl.timestamp("created_ad")
            .notNullable()
            .defaultTo(knex.fn.now());
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
        tbl.integer("snippet_id")
            .references("id")
            .inTable("snippets")
            .notNullable()
            .index();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("snippet_likes");
};
