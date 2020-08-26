let faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('snippet_reports').truncate()
    .then(function () {
      return knex('snippet_reports').insert([
        {
          snippet_id: 1,
          user_id: 1,
          category_id: 1,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 1,
          user_id: 3,
          category_id: 2,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 2,
          user_id: 3,
          category_id: 1,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 6,
          user_id: 5,
          category_id: 1,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 7,
          user_id: 5,
          category_id: 1,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 5,
          user_id: 5,
          category_id: 1,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 3,
          user_id: 4,
          category_id: 3,
          created_at: `${faker.date.future()}`
        }
      ]);
    });
};
