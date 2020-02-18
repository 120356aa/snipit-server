exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments();
      tbl.string("uid").notNullable().unique();
      tbl.string("display_name").notNullable();
      tbl.string("image").notNullable();
      tbl.integer("account_type").notNullable();
      tbl.timestamp("created_at").notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};