let faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('snippets').truncate()
    .then(function () {
      return knex('snippets').insert([
        {
          user_id: 1,
          authorization_id: 1,
          title: `${faker.lorem.words()}`,
          description: `${faker.lorem.sentences()}`,
          code: `${faker.lorem.paragraph()}`,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 2,
          authorization_id: 1,
          title: `${faker.lorem.words()}`,
          description: `${faker.lorem.sentences()}`,
          code: `${faker.lorem.paragraph()}`,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 2,
          authorization_id: 2,
          title: `${faker.lorem.words()}`,
          description: `${faker.lorem.sentences()}`,
          code: `${faker.lorem.paragraph()}`,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 3,
          authorization_id: 2,
          title: `${faker.lorem.words()}`,
          description: `${faker.lorem.sentences()}`,
          code: `${faker.lorem.paragraph()}`,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 4,
          authorization_id: 1,
          title: `${faker.lorem.words()}`,
          description: `${faker.lorem.sentences()}`,
          code: `${faker.lorem.paragraph()}`,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 4,
          authorization_id: 1,
          title: `${faker.lorem.words()}`,
          description: `${faker.lorem.sentences()}`,
          code: `${faker.lorem.paragraph()}`,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 5,
          authorization_id: 1,
          title: `${faker.lorem.words()}`,
          description: `${faker.lorem.sentences()}`,
          code: `${faker.lorem.paragraph()}`,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 5,
          authorization_id: 2,
          title: `${faker.lorem.words()}`,
          description: `${faker.lorem.sentences()}`,
          code: `${faker.lorem.paragraph()}`,
          created_at: `${faker.date.future()}`
        },
        {
          user_id: 5,
          authorization_id: 1,
          title: `${faker.lorem.words()}`,
          description: `${faker.lorem.sentences()}`,
          code: `${faker.lorem.paragraph()}`,
          created_at: `${faker.date.future()}`
        },
      ]);
    });
};
