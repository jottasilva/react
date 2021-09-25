const http = require('http');
const server = http.createServer((req, res) =>{

const resp = []
resp['/'] = '<h1>HOME</h1>'
resp['/portfolio'] = '<h1>PORTIFOLIO</h1>'
resp['/contato'] = '<h1>CONTATO</h1>'
resp['nourl']  = '<h1>URL SEM RESPOSTA DEFINIDA</h1>'

res.end(resp[req.url] || resp['nourl']) 
})
server.listen(3000, 'localhost',()=>{
    console.log('Servidor Rodando em http:/localhost:3000');
})