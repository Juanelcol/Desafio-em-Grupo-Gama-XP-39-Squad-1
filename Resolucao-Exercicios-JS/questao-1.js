// 1. Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)

// array para armazenar o valor do atributo qtdEstoque de cada um dos objetos do array listaProdutos
var listaEstoque = []; 

/* loop para percorrer cada um dos objetos do array listaProdutos, 
   extraindo apenas o valor do atributo qtdEstoque e colocando no array listaEstoque */
for (var i = 0; i < listaProdutos.length; i++) { 
  listaEstoque.push(listaProdutos[i].qtdEstoque);
}

var somaEstoque = 0;

for (var i = 0; i < listaEstoque.length; i++) {
  somaEstoque += listaEstoque[i];
}

console.log(somaEstoque);