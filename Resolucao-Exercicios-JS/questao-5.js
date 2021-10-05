/* 5. Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em 
      estoque - considere apenas os produtos “EM ESTOQUE”) */

var valorTotalItem = [];

for (var i = 0; i < listaProdutos.length; i++) {
    if (listaProdutos[i].qtdEstoque > 0) {
        valorTotalItem.push(listaProdutos[i].preco * listaProdutos[i].qtdEstoque);    
    }
}

//variável para armazenar o somatório de todos os produtos, utilizando o método reduce
var somaInventario = valorTotalItem.reduce((valorAnt, valorAtu) => {
  return valorAnt + valorAtu;
})

console.log(somaInventario);