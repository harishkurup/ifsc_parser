const config = require('config');
const mariaDB = require('mariadb');

let host = config.get('database.host');
let user = config.get('database.user');
let password = config.get('database.password');
let database = config.get('database.database');

const dbPool = mariaDB.createPool({
    host: host, 
    user: user,
    password: password,
    database: database,
    connectTimeout: 100000
  });

module.exports = dbPool;