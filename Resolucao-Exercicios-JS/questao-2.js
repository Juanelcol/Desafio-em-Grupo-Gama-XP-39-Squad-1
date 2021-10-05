// 2. Quantidade total de itens em destaque (somatória das quantidades dos itens marcados como "emDestaque : sim")

//array para armazenar somente os produtos em destaque
var listaEmDestaque = []; 

/* loop para percorrer cada um dos objetos do array listaProdutos, 
extraindo apenas o valor do atributo qtdEstoque e colocar no array listaEmDestaque */
for (var i = 0; i < listaProdutos.length; i++) {

/* condicional para selecionar a quantidade em estoque somente dos produtos em 
   destaque e acrescentar ao array listaEmDestaque */
  if (listaProdutos[i].emDestaque === "sim") { 
    listaEmDestaque.push(listaProdutos[i].qtdEstoque)
  };
}

// variável para ir acumulando a somatória do atributo qtdEstoque (armazenado no array listaEmDestaque) a cada iteração do loop abaixo 
var somaEmDestaque = 0; 

for (var i = 0; i < listaEmDestaque.length; i++) {
  somaEmDestaque += listaEmDestaque[i];
}

console.log(somaEmDestaque);