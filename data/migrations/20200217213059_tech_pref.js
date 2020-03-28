exports.up = function(knex, Promise) {
    return knex.schema.createTable("technologies_pref", tbl => {
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
    return knex.schema.dropTableIfExists("technologies_pref");
};