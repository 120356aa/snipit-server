exports.up = function(knex, Promise) {
    return knex.schema.createTable("following", tbl => {
        tbl.integer("followed_user").notNullable();
        tbl.timestamp("created_at").notNullable();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("following");
};