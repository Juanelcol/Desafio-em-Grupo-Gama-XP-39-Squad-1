/* 10. Valor do ticket médio dos produtos da empresa (basicamente o valor total do inventário dividido 
        pelo número de itens - considere TODOS os produtos, porém considere apenas 1 exemplar por produto) */

var valorTotalItens = [];

for (var i = 0; i < listaProdutos.length; i++) {
  if (listaProdutos[i].qtdEstoque > 0) {
    valorTotalItens.push(listaProdutos[i].preco * listaProdutos[i].qtdEstoque)    
  }
}

//variável para armazenar o somatório de todos os produtos, utilizando o método reduce
var somaInventario = valorTotalItens.reduce((valorAnt, valorAtu) => {
  return valorAnt + valorAtu;
})

/* variável para armazenar o ticket médio de todos os produtos 
   (divisão do inventário total pelo número unitário de produtos) */
var ticketMedioProdutos = somaInventario / listaProdutos.length;

console.log(ticketMedioProdutos);