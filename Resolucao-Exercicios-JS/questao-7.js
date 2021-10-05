// 7. Produto mais barato da loja (bem como seu departamento - considere apenas o preço dele)

var itemMaisBarato = listaProdutos.sort((a, b) => a.preco - b.preco);

console.log(itemMaisBarato[0].descricao);
console.log(itemMaisBarato[0].departamento.nomeDepto);
