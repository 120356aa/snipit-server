let faker = require('faker');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.seed = function(knex) {
  return knex('comment_reports').truncate()
    .then(function () {
      return knex('comment_reports').insert([
        {
          comment_id: 1,
          user_id: 1,
          category_id: getRandomNumber(1, 3),
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 1,
          user_id: 2,
          category_id: getRandomNumber(1, 3),
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 3,
          user_id: 2,
          category_id: getRandomNumber(1, 3),
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 4,
          user_id: 3,
          category_id: getRandomNumber(1, 3),
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 4,
          user_id: 4,
          category_id: getRandomNumber(1, 3),
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 5,
          user_id: 4,
          category_id: getRandomNumber(1, 3),
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 6,
          user_id: 5,
          category_id: getRandomNumber(1, 3),
          created_at: `${faker.date.future()}`
        },
      ]);
    });
};
