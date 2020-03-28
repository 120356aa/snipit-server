exports.up = function(knex, Promise) {
    return knex.schema.createTable("snippets", tbl => {
        tbl.increments();
        tbl.string("title").notNullable();
        tbl.text("description").notNullable();
        tbl.text("code").notNullable();
        tbl.integer("authorization").notNullable();
        tbl.timestamp("created_at").notNullable();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("snippets");
};