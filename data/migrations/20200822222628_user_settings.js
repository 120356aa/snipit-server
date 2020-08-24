exports.up = function(knex, Promise) {
    return knex.schema.createTable("user_settings", tbl => {
        tbl.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .index();
        tbl.boolean("dark_mode")
            .notNullable();
        tbl.boolean("expert_mode")
            .notNullable();
        tbl.boolean("like_notifications")
            .notNullable();
        tbl.boolean("comment_notifications")
            .notNullable();
        tbl.boolean("follow_notifications")
            .notNullable();
        tbl.boolean("ad_toggle")
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("user_settings");
};
