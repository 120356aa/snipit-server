exports.up = function(knex, Promise) {
    return knex.schema.createTable("tags", tbl => {
        tbl.integer("snippet_id")
            .references("id")
            .inTable("snippets")
            .notNullable();
        tbl.integer("tech_id")
            .references("id")
            .inTable("technologies")
            .notNullable();
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("tags");
};