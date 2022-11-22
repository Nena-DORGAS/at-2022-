const {conexao, conteudo} = require('../config/database')

module.exports = (app)=>{
    app.get('/resultado',async(req,res)=>{
        conexao()
        const resultado = await conteudo.find()
        res.render('resultado.ejs',{resultado})
    })
}