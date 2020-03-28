exports.seed = function(knex) {
  return knex('tech').del()
    .then(function () {
      return knex('tech').insert([

      ]);
    });
};
