exports.up = function(knex, Promise) {
    return knex.schema.createTable("technologies_selected", tbl => {
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable()
            .index();
        tbl.integer("tech_id")
            .references("id")
            .inTable("technologies")
            .notNullable();''
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("technologies_selected");
};
