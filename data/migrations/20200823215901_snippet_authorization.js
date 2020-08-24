exports.up = function(knex, Promise) {
    return knex.schema.createTable("snippet_authorization", tbl => {
        tbl.increments();
        tbl.text("authorization")
            .notNullable()
            .unique();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("snippet_authorization");
};
