const express = require('express')
const path = require('path')
const router = express.Router()

const loginController = require('../controller/loginController')

router.get('/', (req, res, next) => {
    res.render(path.resolve('./views/login.html'), { erroMensagem: '', erro: 'display: none' });
});

router.post('/', loginController.login)

module.exports = router;