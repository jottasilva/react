/*Configuração banco de dados*/
const Sequelize = require('sequelize')
const sequelize = new Sequelize('crudjs','root','', {
    host: "localhost",
    dialect: 'mysql'
})
/*sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!")
}).catch(function(erro){
    console.log("Falha ao tentar se conectar")
})*/
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}