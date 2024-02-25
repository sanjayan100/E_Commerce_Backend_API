const mysql = require('mysql2/promise');
const dbConfig=require('../config/db.config');
// const dbConfig = {
// 	host: 'localhost',
//     user: 'root',
//     password: 'roots',
//     database: 'ecommerce_db',
//     port: 3306,
// }
const pool = mysql.createPool(dbConfig);

module.exports = pool;
