exports.seed = function(knex, Promise) {
  return knex('user_settings').truncate()
    .then(function () {
      return knex('user_settings').insert([
         {
           user_id: 1,
           dark_mode: 1,
           expert_mode: 1,
           like_notifications: 1,
           follow_notifications: 1,
           comment_notifications: 1,
           ad_toggle: 0,
         },
         {
          user_id: 2,
          dark_mode: 0,
          expert_mode: 0,
          like_notifications: 0,
          follow_notifications: 1,
          comment_notifications: 1,
          ad_toggle: 1,
        },
        {
          user_id: 3,
          dark_mode: 1,
          expert_mode: 1,
          like_notifications: 1,
          follow_notifications: 0,
          comment_notifications: 1,
          ad_toggle: 0,
        },
        {
          user_id: 4,
          dark_mode: 1,
          expert_mode: 1,
          like_notifications: 0,
          follow_notifications: 0,
          comment_notifications: 1,
          ad_toggle: 0,
        },
        {
          user_id: 5,
          dark_mode: 0,
          expert_mode: 0,
          like_notifications: 1,
          follow_notifications: 1,
          comment_notifications: 1,
          ad_toggle: 1,
        },
      ]);
    });
};
