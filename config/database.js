//importar o mongoose
const mongoose = require('mongoose')

//suas informações
const user = 'UserAdmin'
const senha = 'do04092005'
const cluster = 'fiaptecnico.jawtu.mongodb.net'
const db = 'html'

//scripts de conexão
const conexao = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://'+user+':'+senha+'@'+cluster+'/'+db)  // coloque sua database
}

const modelo = mongoose.Schema({
    estilos:String,
    imagem:String,
    titulo:String,
    texto:String,
    cadastradoem:{type:Date,default:Date.now}
})

const conteudo = mongoose.model('conteudo', modelo)

//exportar as infomações para acesso externo
module.exports = {conexao, conteudo}