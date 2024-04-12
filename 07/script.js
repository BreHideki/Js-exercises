/*
Faça um programa que tenha um meno e apresente a mensagem:
Olá usuário! Digite a opção desejada:

1. Cadastrar um item na lista 
2. Mostrar o item desejado
3. Sair do programa

O programa deverá capturar o número digitado pelo usuário
e mostrar os seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista

Caso o usuário digite 2, ele poderá ver os itens cadastrados
 Se não houver nenhum item cadastrado, mostrar a mensagem:
  "Não existem itens cadastrados"

Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/

/*switch (expressão) {
  case valor1:
    //Instruções executadas quando o resultado da expressão for igual á valor1
    [break;]
  case valor2:
    //Instruções executadas quando o resultado da expressão for igual á valor2
    [break;]
  ...
  case valueN:
    //Instruções executadas quando o resultado da expressão for igual á valorN
    [break;]
  default:
    //Instruções executadas quando o valor da expressão é diferente de todos os cases
    [break;]
}*/

let menu;

let list = [];

let showList;

while(menu != 3) {
    menu = Number(prompt(`
    Olá usuário! Digite a opção desejada:
    
    1. Cadastrar um item na lista 
    2. Mostrar itens cadastrados
    3. Sair do programa`))

    switch(menu) {
        case 1:
          let item = prompt("Digite o item para ser cadastrado:")
          if(item.length == 0) {
            alert("Insira um item válido")
          }
          list.push(item)
        break;
        case 2:
         showList = list.length != 0 ? alert(list) : alert("Não existem itens cadastrados")
        break;
        case 3:
          break;
        default:
          alert("Opção inválida");
    }
}