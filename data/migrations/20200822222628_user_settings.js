exports.up = function(knex) {
    return knex.schema.createTable("user_settings", tbl => {
        tbl.boolean("dark_mode");
        tbl.boolean("expert_mode");
        tbl.boolean("like_notifications");
        tbl.boolean("comment_notifications");
        tbl.boolean("follow_notifications");
        tbl.boolean("ad_toggle");
        tbl.integer("user_id")
            .references("id")
            .inTable("users")
            .index();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_settings");
};
