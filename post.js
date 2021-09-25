const db = require('./db')
// Configuração de banco de dados
const Postagem = db.sequelize.define('Postagens',{
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})
module.exports = Postagem;