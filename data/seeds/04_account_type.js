
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('account_type').truncate()
    .then(function () {
      // Inserts seed entries
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
