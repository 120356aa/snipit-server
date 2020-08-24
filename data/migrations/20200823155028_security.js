exports.up = function(knex, Promise) {
    return knex.schema.createTable("security", tbl => {
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable()
            .unique()
            .index();
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
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("security");
};
