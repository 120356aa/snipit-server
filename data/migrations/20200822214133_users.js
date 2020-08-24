exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.uuid("uuid")
        .notNullable()
        .unique();
    tbl.varchar("display_name")
        .notNullable();
    tbl.text("image")
        .notNullable();
    tbl.varchar("about");
    tbl.timestamp("created_at")
        .notNullable()
        .defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
};
