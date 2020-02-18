exports.up = function(knex, Promise) {
    return knex.schema.createTable("following", tbl => {
        tbl.integer("followed_user");
        tbl.timestamp("created_at");
        tbl.integer("user_id")
            .references("id")
            .inTable("users");
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("following");
};