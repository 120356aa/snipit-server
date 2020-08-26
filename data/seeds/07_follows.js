let faker = require('faker');

exports.seed = function(knex) {
  return knex('follows').truncate()
    .then(function () {
      return knex('follows').insert([
        {
          user_id: 1,
          followed_user_id: 2,
          view_status: 0,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 1,
          followed_user_id: 3,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 2,
          followed_user_id: 1,
          view_status: 0,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 2,
          followed_user_id: 3,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 3,
          followed_user_id: 4,
          view_status: 0,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 3,
          followed_user_id: 5,
          view_status: 0,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 4,
          followed_user_id: 1,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 4,
          followed_user_id: 5,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 5,
          followed_user_id: 1,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 5,
          followed_user_id: 2,
          view_status: 0,
          created_at: `${faker.date.future()}`
        },
      ]);
    });
};
