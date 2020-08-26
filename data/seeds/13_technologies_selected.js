function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.seed = function(knex, Promise) {
  return knex('technologies_selected').truncate()
    .then(function () {
      return knex('technologies_selected').insert([
        {
          user_id: 1,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 1,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 1,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 2,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 2,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 2,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 3,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 3,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 3,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 4,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 4,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 4,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 5,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 5,
          tech_id: getRandomNumber(1, 12)
        },
        {
          user_id: 5,
          tech_id: getRandomNumber(1, 12)
        },
      ]);
    });
};
