// Declaramos a função somar com parâmetros
function somar2numeros(numero1, numero2) {
    console.log(numero1 + numero2);
}

// 1ª chamado da função somar2numeros (soma dois numeros passados como argumentos e exibe o resultado no console)
somar2numeros(55, 45); //chamando a função somar2numeros

// 2ª Chamada da função somar2numeros com outros argumentos
somar2numeros(100, 200); //chamando a função somar2numeros novamente

//Exercicio

/* 
    A soma é: 34243
    A média é: 123123 
*/


function somarSoma4numeros(num1, num2, num3, num4) {
    let soma = num1 + num2 + num3 + num4;
    console.log("A soma é: " + soma);
}

function media4numeros(num1, num2, num3, num4) {
    let soma = num1 + num2 + num3 + num4;
    let media = soma / 4;
    console.log("A média é: " + media);
}







/* function calcularSomaEMedia(num1, num2, num3, num4) {
    let soma = num1 + num2 + num3 + num4;
    let media = soma / 2;
    console.log("A soma é: " + soma);
    console.log("A média é: " + media);
}

calcularSomaEMedia(100, 200, 300, 400); */