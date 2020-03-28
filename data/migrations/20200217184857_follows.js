exports.up = function(knex, Promise) {
    return knex.schema.createTable("follows", tbl => {
        tbl.integer("followed_user").notNullable();
        tbl.integer("view_status").notNullable();
        tbl.timestamp("created_at").notNullable();
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("follows");
};