exports.up = function(knex) {
    return knex.schema.createTable("comment_reports", tbl => {
        tbl.timestamp("created_at").notNullable();
        tbl.integer("comment_id")
            .references("id")
            .inTable("comments")
            .notNullable();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("comment_reports");
};
