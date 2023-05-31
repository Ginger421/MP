import mysql from "mysql";

require('dotenv').config();

let user = process.env.DB_USER;
let password = process.env.DB_PASSWORD;

console.log(user, password)

var connection = mysql.createConnection(
    {
    host: 'localhost',
    user: user,
    password: password,
    database: 'example_db'
});

module.exports = connection;

