exports.up = function(knex, Promise) {
    return knex.schema.createTable("tech_pref", tbl => {
        tbl.integer("tech_id")
            .references("id")
            .inTable("tech")
            .notNullable();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("tech_pref");
};