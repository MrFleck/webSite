const db = require("./dbFactory");

function cadastraUsuario(userModel) {
    return new Promise(function (resolve, reject) {
        const conn = db.conectando();
        let sql = "INSERT INTO user(NOME,EMAIL,SENHA) VALUES (?,?,?)";
        let values = [userModel.nome, userModel.email, userModel.senha];
        conn.query(sql, values, function (err, rows, fields) {
            if (err) {
                console.log(err.code);
                console.log("ERRO AO CADASTRAR USUÁRIO");
                conn.destroy();
                return resolve(false);
            } else {
                console.log("USUARIO " + userModel.nome + " ADICIONADO COM SUCESSO !");
                return resolve(true);
            }
        });
    });
}

function login(userModel) {
    return new Promise(function (resolve, reject) {
        const conn = db.conectando();
        console.log('o user chegou assim na funcao login: ');
        console.log(userModel);
        let sql = "SELECT * FROM user WHERE email = ?";
        let values = [userModel.email];

        conn.query(sql, values, function (err, rows, fields) {
            if (err) {
                console.log("deu erro");
                conn.destroy();
                return resolve("error");
            } else {
                console.log("não deu erro");
                conn.destroy();
                return resolve(rows[0]);
            }
        });
    });
}

module.exports = { cadastraUsuario, login }