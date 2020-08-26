exports.seed = function(knex, Promise) {
  return knex('account_type').truncate()
    .then(function () {
      return knex('account_type').insert([
        { type: 'free' },
        { type: 'premium' }
      ]);
    });
};
