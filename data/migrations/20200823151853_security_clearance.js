
exports.up = function(knex, Promise) {
  return knex.schema.createTable("security_clearance", tbl => {
      tbl.increments();
      tbl.text("security_level")
        .notNullable()
        .unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("security_clearance");
};
