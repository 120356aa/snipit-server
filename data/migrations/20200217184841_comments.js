exports.up = function(knex, Promise) {
    return knex.schema.createTable("comments", tbl => {
        tbl.increments();
        tbl.text("comment");
        tbl.timestamp("created_at");
        tbl.integer("user_id")
            .references("id")
            .inTable("users");
        tbl.integer("snippet_id")
            .references("id")
            .inTable("snippets");
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("comments");
};