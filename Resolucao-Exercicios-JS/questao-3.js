// 3. Quantidade total de itens disponíveis (similar ao anterior)

//array para armazenar as quantidades em estoque dos produtos disponíveis
var listaDisponiveis = []; 

//loop para percorrer cada um dos objetos do array listaProdutos, extraindo apenas o valor do atributo qtdEstoque e colocando no array 
for (var i = 0; i < listaProdutos.length; i++) {

/* condicional para selecionar a quantidade em estoque somente dos 
   produtos disponíveis e acrescentar ao array listaEmDestaque */
  if (listaProdutos[i].disponivel === "sim") { 
    listaDisponiveis.push(listaProdutos[i].qtdEstoque)
  };
}

// variável para ir acumulando a somatória do atributo qtdEstoque a cada iteração do loop abaixo 
var somaDisponiveis = 0; 

for (var i = 0; i < listaDisponiveis.length; i++) {
  somaDisponiveis += listaDisponiveis[i];
}

console.log(somaDisponiveis);