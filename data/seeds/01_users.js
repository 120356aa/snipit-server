let faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          uuid: `${faker.random.uuid()}`,
          display_name: `${faker.internet.userName()}`,
          image: `${faker.image.imageUrl()}`,
          about: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
        {
          uuid: `${faker.random.uuid()}`,
          display_name: `${faker.internet.userName()}`,
          image: `${faker.image.imageUrl()}`,
          about: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
        {
          uuid: `${faker.random.uuid()}`,
          display_name: `${faker.internet.userName()}`,
          image: `${faker.image.imageUrl()}`,
          about: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
        {
          uuid: `${faker.random.uuid()}`,
          display_name: `${faker.internet.userName()}`,
          image: `${faker.image.imageUrl()}`,
          about: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
        {
          uuid: `${faker.random.uuid()}`,
          display_name: `${faker.internet.userName()}`,
          image: `${faker.image.imageUrl()}`,
          about: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
      ]);
    });
};
