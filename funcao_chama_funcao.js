//Exercicio - refatorar o código para que a função de soma chame a função de média.

/* 
    
function somar4numeros(n1, n2, n3, n4) {
    console.log('A soma é:', n1 + n2 + n3 + n4);
}

somar4numeros(10000, 10000, 10000, 4243);

function media4numeros(n1, n2, n3, n4) {
    console.log('A média é:', (n1 + n2 + n3 + n4) / 4);
}

media4numeros(10000, 10000, 10000, 4243);

*/

function somar4numeros(n1, n2, n3, n4) {
    console.log('A soma é:', n1 + n2 + n3 + n4);
    return n1 + n2 + n3 + n4;
}

//somar4numeros(10000, 10000, 10000, 4243)


function media4numeros(n1, n2, n3, n4) {
    console.log('A média é:', somar4numeros(n1, n2, n3, n4) / 4);
}

media4numeros(10000, 10000, 10000, 4243)

//A função media chama a função somar4numeros.
// Para que a função soma devolva um resultado esperado, é necessário usar o return na função somar4numeros.