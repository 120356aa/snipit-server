exports.up = function(knex, Promise) {
    return knex.schema.createTable("technologies", tbl => {
        tbl.increments();
        tbl.varchar("technology")
            .notNullable();
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("technologies");
};