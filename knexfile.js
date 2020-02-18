require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: { directory: __dirname + './data/migrations' },
    seeds: { directory: __dirname +  './data/seeds' },
  },
};