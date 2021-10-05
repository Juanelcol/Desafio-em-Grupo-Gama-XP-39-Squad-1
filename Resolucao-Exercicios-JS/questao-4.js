// 4. Quantidade de itens disponíveis e em destaque

//array para armazenar as quantidades dos produtos disponíveis e em destaque
var listaDisponiveisDestaque = []; 

//loop para percorrer cada um dos objetos do array listaProdutos
for (var i = 0; i < listaProdutos.length; i++) {

//condicional para selecionar os itens disponíveis e em destaque e acrescentar ao array listaDisponivelDestaque
  if (listaProdutos[i].disponivel === "sim" && listaProdutos[i].emDestaque === "sim") {  
    listaDisponiveisDestaque.push(listaProdutos[i])
  };
}

console.log(listaDisponiveisDestaque.length);