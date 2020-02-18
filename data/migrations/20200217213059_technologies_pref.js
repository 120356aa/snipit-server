exports.up = function(knex, Promise) {
    return knex.schema.createTable("technologies_pref", tbl => {
        tbl.integer("tech_id")
            .references("id")
            .inTable("technologies");
        tbl.integer("user_id")
            .references("id")
            .inTable("users");
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("technologies_pref");
};