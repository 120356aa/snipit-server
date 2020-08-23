exports.up = function(knex, Promise) {
    return knex.schema.createTable("security", tbl => {
        tbl.integer("strikes")
            .notNullable();
        tbl.integer("account_type_id")
            .references("id")
            .inTable("account_type")
            .notNullable()
        tbl.integer("security_level_id")
            .references("id")
            .inTable("security_clearance")
            .notNullable();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable()
            .unique()
            .index();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("security");
};
