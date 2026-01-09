//função:

let n1 = 10;
let n2 = 90;

let soma = n1 + n2;

//console.log(soma)

let media = (n1 + n2) / 2;

//console.log(media);

// criando uma função (Sintaxe básica)
/* 
    function nome() {

    } 
*/

// criando uma função anônima
/* 
    function () {

    }
*/

//Declaramos a função somar
function somar() {
    console.log(10 + 90);
}

// 1ª chamado da função somar (soma dois numeros fixos e exibe o resultado no console)
somar(); //chamando a função somar

// 2ª Chama mas executa a mesma coisa, porque os numeros são fixos
somar(55, 45); //chamando a função somar novamente
