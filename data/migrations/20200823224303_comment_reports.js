exports.up = function(knex, Promise) {
    return knex.schema.createTable("comment_reports", tbl => {
        tbl.integer("comment_id")
            .references("id")
            .inTable("comments")
            .notNullable()
            .index();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
        tbl.integer("category_id")
            .references("id")
            .inTable("report_category")
            .notNullable();
        tbl.timestamp("created_at")
            .notNullable()
            .defaultTo(knex.fn.now());
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("comment_reports");
};
