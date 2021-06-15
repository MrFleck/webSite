const express = require('express')
const path = require('path')
const router = express.Router()

const cadastroController = require('../controller/cadastroController');


router.get('/', (req, res, next) => {
	res.render(path.resolve('./views/cadastro.html'), { erroMensagem: '', erro: 'display: none' });
})

router.post('/', cadastroController.cadastro)

module.exports = router