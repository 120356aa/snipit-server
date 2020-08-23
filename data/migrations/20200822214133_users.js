exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.uuid("uuid")
        .notNullable()
        .unique();
    tbl.text("display_name")
        .notNullable();
    tbl.text("image")
        .notNullable();
    tbl.text("about");
    tbl.timestamp('created_at')
        .defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
