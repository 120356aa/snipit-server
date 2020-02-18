exports.up = function(knex, Promise) {
    return knex.schema.createTable("settings", tbl => {
        tbl.boolean("like_notifications");
        tbl.boolean("follow_notifications");
        tbl.boolean("comment_notifications");
        tbl.boolean("ad_toggle");
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .notNullable();
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("settings");
};