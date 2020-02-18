
exports.seed = function(knex) {
  return knex('technologiesPref').del()
    .then(function () {
      return knex('technologiesPref').insert([
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
