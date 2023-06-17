//import mysql from "mysql";
const mysql = require('mysql2');

require('dotenv').config();

// let user = process.env.DB_USER;
// let password = process.env.DB_PASSWORD;
// let db_name = process.env.DB_NAME;
// let PORT = process.env.DB_PORT;

//console.log(user, password)

var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    // host: 'localhost',
    // user: user,
    // password: password,
    // database: db_name,
    // port: PORT
});

connection.connect((err) => {
    if (err) {console.log(err.message)}
    console.log('db' + connection.state)
})

module.exports = connection;

