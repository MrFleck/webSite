// IMPORTANDO MODULOS
const express = require('express')
const path = require('path')
const app = express()

//IMPORTANDO ROTAS
const indexRouter = require('./routes/indexRouter');
const loginRouter = require('./routes/loginRouter');
const cadastroRouter = require('./routes/cadastroRouter');
const homeRouter = require('./routes/homeRouter');

//CONFIG  
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/public', express.static(__dirname + '/views/public/'));
app.use(express.json()) 
  
//VIEW ENGINE SETUP
app.set('views', path.resolve('./views'));
app.set('views engine', 'ejs');

//RENDERIZAR OS HTML
app.engine('html', require('ejs').renderFile);

//ROTAS
app.use('/', indexRouter); 
app.use('/admin', loginRouter);
app.use('/cadastro', cadastroRouter); 
app.use('/home', homeRouter);

app.listen(8000, () => console.log("Servidor rodando na porta 8000"))
