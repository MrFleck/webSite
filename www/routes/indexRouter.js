const express = require('express')
const path = require('path')
const router = express.Router()


router.get('/', (req, res, next) => {
	console.log("HEADERS: ");
	console.log(req.headers);
	res.sendFile(path.resolve('./views/home.html'));
})

module.exports = router