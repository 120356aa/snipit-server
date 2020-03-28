exports.up = function(knex, Promise) {
    return knex.schema.createTable("comments", tbl => {
        tbl.increments();
        tbl.text("comment").notNullable();
        tbl.timestamp("created_at").notNullable();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
        tbl.integer("snippet_id")
            .references("id")
            .inTable("snippets")
            .notNullable();
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("comments");
};