const sequence = {
    _id : 1,
    get id() {
        return this._id++   /// sempre q chama sequence vai seta o id
    }
}

const produtos = {}

    function salvaProduto(produto){
        if (!produto.id) produto.id = sequence.id      //// !produtos.id ve se esta setado o produtos id
        produtos[produto.id] = produto;    ///atualiza ou mantem q foi passado na linha acima
        return produto   ////ja vai ter o id
    }

    function getProduto(id){
        return produtos[id] || {}      // retorna produto q contem o id se nao tiver retorna objeto vazio
    }

    function getProdutos(){
        return Object.values(produtos)  /// retorna o valores dentro do objto
    }
    function deleteProdutos(id){
        const produto = produtos[id]
        delete produtos[id]
        return produto   /// retorna o valores dentro do objto
    }

module.exports = {salvaProduto, getProduto, getProdutos, deleteProdutos}