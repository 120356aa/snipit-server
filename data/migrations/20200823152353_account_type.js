
exports.up = function(knex, Promise) {
    return knex.schema.createTable("account_type", tbl => {
        tbl.increments();
        tbl.text("type")
            .notNullable()
            .unique();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("account_type");
};  
