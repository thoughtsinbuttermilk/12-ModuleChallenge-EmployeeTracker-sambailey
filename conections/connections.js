// dependency
const mysql = require('mysql2');

// open a connection to the MySQL database
const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    // your username
    user: "root",
    // your password
    password: "BHogn_53",
    database: "employee_tracker"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected to employee tracker database as ID " + connection.threadId);

});

module.exports = connection;