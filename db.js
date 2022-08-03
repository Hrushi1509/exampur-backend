const mysql = require("mysql2")

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '98765Hr@',
    database: 'online_exam'
})