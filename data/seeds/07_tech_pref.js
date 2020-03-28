exports.seed = function(knex) {
  return knex('tech_pref').del()
    .then(function () {
      return knex('tech_pref').insert([

      ]);
    });
};
