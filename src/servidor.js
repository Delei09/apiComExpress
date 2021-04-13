const express = require('express')
const app = express()
const porta = 3003
const bancoDeDados = require('./bancoDEDados');
const bodyParser = require('body-parser')   
//app.use usa esse metodo em todas as requisições
app.use(bodyParser.urlencoded({extended: true}))  ///urlencoded retorna uma função midle q faz um parse no body da requisição
//npm 

///produtos é como se fosse a url
app.get('/produtos' , (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})
//'/produtos/:id' url com id
app.get('/produtos/:id' , (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))   //req vem os paramentros do BD ,  res é a resposta q a gent envia
} )
app.listen(porta , () =>{
    console.log('servidor na porta ' + porta)
})
// req é o q vem 
// salvar produto no banco de dados
app.post('/produtos' , (req , res, next) => {
    const produto = bancoDeDados.salvaProduto({
        nome: req.body.nome,    //como pegar atributo pelo post
        preco: req.body.preco
    })
    res.send(produto)  //gera json
})

app.put('/produtos/:id' , (req , res, next) => {
    const produto = bancoDeDados.salvaProduto({
        id: req.params.id,
        nome: req.body.nome,    //como pegar atributo pelo post
        preco: req.body.preco
    })
    res.send(produto)  //gera json
})

app.delete('/produtos/:id' , (req , res, next) => {
    const produto = bancoDeDados.deleteProdutos(req.params.id)
    res.send(produto)  //gera json
})