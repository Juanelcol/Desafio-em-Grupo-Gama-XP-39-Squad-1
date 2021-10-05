// 6. Produto mais caro da loja (bem como seu departamento - considere apenas o preço dele)

var itemMaisCaro = listaProdutos.sort((a, b) => b.preco - a.preco);

console.log(itemMaisCaro[0].descricao);
console.log(itemMaisCaro[0].departamento.nomeDepto);