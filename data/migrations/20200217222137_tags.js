exports.up = function(knex, Promise) {
    return knex.schema.createTable("tags", tbl => {
        tbl.integer("snippet_id")
            .references("id")
            .inTable("snippets")
            .notNullable();
        tbl.integer("tech_id")
            .references("id")
            .inTable("tech")
            .notNullable();
    })
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("tags");
};