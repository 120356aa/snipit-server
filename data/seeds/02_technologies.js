exports.seed = function(knex) {
  return knex('technologies').del()
    .then(function () {
      return knex('technologies').insert([
        {
          id: 1,
          technology: 'React'
        },
        {
          id: 2,
          technology: 'Vue'
        },
        {
          id: 3,
          technology: 'Javascript'
        },
      ]);
    });
};
