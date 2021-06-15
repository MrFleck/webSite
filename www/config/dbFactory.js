function conectando() {
    var mysql = require('mysql');
    var env = require('../env');

    var con = mysql.createConnection({
        host: env.db.host,
        user: env.db.user,
        password: env.db.password,
        database: env.db.database
    });

    con.connect();
    return con;
}

module.exports = { conectando }