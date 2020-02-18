exports.up = function(knex, Promise) {
    return knex.schema.createTable("technologiesPref", tbl => {
        tbl.integer("tech_id")
            .references("id")
            .inTable("technologies")
            .notNullable();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("technologiesPref");
};