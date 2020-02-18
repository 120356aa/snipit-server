
exports.seed = function(knex) {
  return knex('settings').del()
    .then(function () {
      return knex('settings').insert([
        {
          like_notifications: true,
          follow_notifications: true,
          comment_notifications: true,
          ad_toggle: false,
          user_id: 1
        },
        {
          like_notifications: false,
          follow_notifications: true,
          comment_notifications: true,
          ad_toggle: true,
          user_id: 2
        },
        {
          like_notifications: true,
          follow_notifications: true,
          comment_notifications: false,
          ad_toggle: true,
          user_id: 3
        },
      ]);
    });
};
