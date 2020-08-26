exports.seed = function(knex) {
  return knex('security').truncate()
    .then(function () {
      return knex('security').insert([
        {
          user_id: 1,
          strikes: 0,
          account_type_id: 2,
          security_level_id: 4
        },
        {
          user_id: 2,
          strikes: 0,
          account_type_id: 1,
          security_level_id: 1
        },
        {
          user_id: 3,
          strikes: 1,
          account_type_id: 1,
          security_level_id: 1
        },
        {
          user_id: 4,
          strikes: 1,
          account_type_id: 2,
          security_level_id: 2
        },
        {
          user_id: 5,
          strikes: 0,
          account_type_id: 2,
          security_level_id: 3
        },
      ]);
    });
};
