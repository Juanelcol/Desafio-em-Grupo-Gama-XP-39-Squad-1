// 8. Produto de estoque mais valioso (considere o preço multiplicado pela quantidade e também apenas EM ESTOQUE)

var itemMaisValioso = listaProdutos.sort((a, b) => b.preco * b.qtdEstoque - a.preco * a.qtdEstoque);

console.log(itemMaisValioso[0].descricao);