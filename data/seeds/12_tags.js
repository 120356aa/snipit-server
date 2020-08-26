function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.seed = function(knex) {
  return knex('tags').truncate()
    .then(function () {
      return knex('tags').insert([
        {
          snippet_id: 1,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 1,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 1,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 2,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 2,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 2,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 3,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 3,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 3,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 4,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 4,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 4,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 5,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 5,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 5,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 6,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 6,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 6,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 7,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 7,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 7,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 8,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 8,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 8,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 9,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 9,
          tech_id: `${getRandomNumber(1, 12)}`
        },
        {
          snippet_id: 9,
          tech_id: `${getRandomNumber(1, 12)}`
        },
      ]);
    });
};
