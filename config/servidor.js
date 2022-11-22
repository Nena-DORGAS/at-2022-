//importar o pacote express
const express = require('express')
//executar o express application
const app = express()

//configurar a porta local
const porta = process.env.PORT || 1101

//habilitar o express para receber os dados de formulário
app.use(express.urlencoded({extended:false}))

//impotar o consign
const consign = require('consign')
//executar e conigurar
consign().include('./routes').into(app)

//indicar a pasta dos assets
app.use(express.static('./src'))

module.exports = {app, porta}