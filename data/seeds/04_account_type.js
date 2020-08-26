exports.seed = function(knex) {
  return knex('account_type').truncate()
    .then(function () {
      return knex('account_type').insert([
        {
          type: 'free'
        },
        {
          type: 'premium'
        }
      ]);
    });
};
