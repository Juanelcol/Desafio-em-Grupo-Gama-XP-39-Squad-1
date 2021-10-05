// 9. Produto em estoque menos valioso (considere o preço multiplicado pela quantidade e também apenas EM ESTOQUE)

var itensEmEstoque = [];

  for (i = 0; i < listaProdutos.length; i++){
    if(listaProdutos[i].qtdEstoque > 0){
        itensEmEstoque.push(listaProdutos[i]);
    }
}

var itemMenosValioso = itensEmEstoque.sort((a, b) => a.preco * a.qtdEstoque - b.preco * b.qtdEstoque);

console.log(itemMenosValioso[0].descricao)