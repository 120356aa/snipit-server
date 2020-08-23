exports.up = function(knex, Promise) {
  return knex.schema.createTable("report_category", tbl => {
      tbl.increments();
      tbl.text("category")
        .notNullable()
        .unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("report_category");
};
