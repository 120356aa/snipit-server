exports.up = function(knex, Promise) {
    return knex.schema.createTable("comment_likes", tbl => {
        tbl.integer("comment_id")
            .references("id")
            .inTable("comments")
            .notNullable()
            .index();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
        tbl.boolean("view_status")
            .notNullable();
        tbl.timestamp("created_at")
            .notNullable()
            .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("comment_likes");
};
