exports.up = function(knex, Promise) {
    return knex.schema.createTable("follows", tbl => {
        tbl.integer("followed_user_id")
            .notNullable();
        tbl.integer("view_status")
            .notNullable();
        tbl.timestamp("created_at")
            .notNullable()
            .defaultTo(knex.fn.now());
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable()
            .index();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("follows");
};
