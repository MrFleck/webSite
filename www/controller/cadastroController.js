const path = require('path');
const User = require('../model/userModel');
const db = require("../config/dbUser");
const bcrypt = require('bcrypt');

exports.cadastro = (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;
    const nome = req.body.nome;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(senha, salt);
    const user = new User(email, hash, nome);
    db.cadastraUsuario(user).then(function (cadastrou) {
        console.log(cadastrou);

        if (cadastrou == true) {
            //PRECISAMOS VERICAR ESSE MÉTODO PARA QUE NÃO CONSEGUIMOS ACESSAR POR FORA
            res.render(path.resolve('./views/adminHome.html'), { message: 'Olá ' + user.nome + '!' });
        } else {
            //PRECISAMOS VERICAR ESSE MÉTODO PARA QUE NÃO CONSEGUIMOS ACESSAR POR FORA
            res.render(path.resolve('./views/cadastro.html'), { erroMensagem: 'Erro ao cadastrar usuário tente novamente mais tarde.', erro: 'display: block' });
        }
    });
};