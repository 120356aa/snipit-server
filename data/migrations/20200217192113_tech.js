exports.up = function(knex, Promise) {
    return knex.schema.createTable("tech", tbl => {
        tbl.increments();
        tbl.varchar("technology").notNullable();
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("tech");
};