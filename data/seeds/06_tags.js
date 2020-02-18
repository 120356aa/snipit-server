exports.seed = function(knex) {
  return knex('tags').del()
    .then(function () {
      return knex('tags').insert([
        {
          snippet_id: 1,
          tech_id: 1
        },
        {
          snippet_id: 1,
          tech_id: 2
        },
        {
          snippet_id: 1,
          tech_id: 3
        },
        {
          snippet_id: 2,
          tech_id: 1
        },
        {
          snippet_id: 2,
          tech_id: 3
        },
        {
          snippet_id: 3,
          tech_id: 2
        },
        {
          snippet_id: 3,
          tech_id: 3
        },
      ]);
    });
};
