const path = require('path');
const User = require('../model/userModel');
const db = require("../config/dbUser");
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = new User(email, password);
  db.login(user).then(function (rows) {
    let userDb = rows;
    if (!!userDb && userDb != 'error') {
      if (bcrypt.compareSync(user.senha, userDb.senha) == true) {
        res.render(path.resolve('./views/adminHome.html'), { message: 'Olá ' + userDb.nome + '!' });
      } else {
        res.render(path.resolve('./views/login.html'), { erroMensagem: 'Usuário ou senha inválidos.', erro: 'display: block' });
      }
    } else if (userDb == undefined) {
      res.render(path.resolve('./views/login.html'), { erroMensagem: 'Usuário ou senha inválidos.', erro: 'display: block' });
    } else {
      res.render(path.resolve('./views/login.html'), { erroMensagem: 'Tivemos problemas ao nos conectar com nosso servidor, tente novamente mais tarde.', erro: 'display: block' });
    }

  });
};