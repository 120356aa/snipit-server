exports.up = function(knex, Promise) {
    return knex.schema.createTable("snippets", tbl => {
        tbl.increments();
        tbl.string("title");
        tbl.text("text");
        tbl.integer("likes");
        tbl.integer("authorization");
        tbl.timestamp("created_at");
        tbl.integer("user_id")
            .references("id")
            .inTable("users");
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("snippets");
};