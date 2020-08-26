let faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('snippet_likes').truncate()
    .then(function () {
      return knex('snippet_likes').insert([
        {
          snippet_id: 1,
          user_id: 1,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 2,
          user_id: 1,
          view_status: 0,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 4,
          user_id: 2,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 5,
          user_id: 3,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 7,
          user_id: 4,
          view_status: 0,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 6,
          user_id: 4,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 1,
          user_id: 5,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 4,
          user_id: 5,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 2,
          user_id: 5,
          view_status: 0,
          created_at: `${faker.date.future()}`
        },
      ]);
    });
};
