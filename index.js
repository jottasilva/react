const express = require("express")
const app = express();
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const Post = require('./post');
const { Sequelize, sequelize } = require("./db");
// config
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine','handlebars')
// conf body parser
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
// Servidor
app.listen(3000, function(){
    console.log("Servidor Rodando localhost:3000");
});
// rota renderizar formulario de cadastro
app.get('/cad', function(req, res){
    res.render('formulario')
})
// rota captura dados formulario
app.post('/add', function(req, res){
    
    Post.create({
        titulo: req.body.titulo,
        conteudo : req.body.conteudo  
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Erro ao tentar Criar Postagem" +erro)
    })
    
})
app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Esta Postagem não")
    })
})
// Principal
app.get('/', function(req, res){
    
        Post.findAll({order: [['id','DESC']]}).then(function(posts){
            res.render('home',{posts : posts})
        })     
})