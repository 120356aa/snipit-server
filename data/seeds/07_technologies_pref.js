exports.seed = function(knex) {
  return knex('technologies_pref').del()
    .then(function () {
      return knex('technologies_pref').insert([
        {
          tech_id: 1,
          user_id: 1
        },
        {
          tech_id: 2,
          user_id: 1
        },
        {
          tech_id: 3,
          user_id: 1
        },
        {
          tech_id: 1,
          user_id: 2
        },
        {
          tech_id: 2,
          user_id: 2
        },
        {
          tech_id: 3,
          user_id: 2
        },
        {
          tech_id: 1,
          user_id: 3
        },
        {
          tech_id: 2,
          user_id: 3
        },
        {
          tech_id: 3,
          user_id: 3
        },
      ]);
    });
};
