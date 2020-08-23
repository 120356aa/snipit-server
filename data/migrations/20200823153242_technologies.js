exports.up = function(knex, Promise) {
    return knex.schema.createTable("technologies", tbl => {
        tbl.increments();
        tbl.text("technology")
            .notNullable()
            .unique();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("technologies");
};
