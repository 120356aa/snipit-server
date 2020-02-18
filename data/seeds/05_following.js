
exports.seed = function(knex) {
  return knex('following').del()
    .then(function () {
      return knex('following').insert([
        {
          followed_user: 2,
          created_at: "2011-10-02 18:48:05.123",
          user_id: 1
        },
        {
          followed_user: 3,
          created_at: "2011-10-02 18:48:05.123",
          user_id: 1
        },
        {
          followed_user: 1,
          created_at: "2011-10-02 18:48:05.123",
          user_id: 3
        },
      ]);
    });
};
