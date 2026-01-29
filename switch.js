let dia = new Date().getDay()
//console.log(`Dia da semana: ${dia}`)

// Usaremos o switch para verificar o número e retornar a string do dia da semana
/* switch(dia) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;  
     case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;  
    case 6:
        console.log('Sábado');
        break; 
} */

// Exercicio: Crie uma função utilizando switch/case que eu passe como parâmetro o numero do dia da semana e ele retonrne a string do dia da semana. Coloque as validaçõe se necessário.

// 1 somente numeros inteiros               (ok)
// nao so pode numeros negativos            (ok) 
// não pode ser texto                       (ok)
// não pode ter caracteres especiais        (ok)
// não pode ser vazio                       (ok)
// não pode ser maior que 6 e menor que 0   (ok)

function diaSemana(dia) {
    //console.log(`Tipo de dado: ${typeof dia}`);

    //const regex = /^[a-zA-Z0-9]+$/;

    if (typeof dia !== 'number' || !Number.isInteger(dia)) {
        console.log('Erro: O parâmetro deve ser um número inteiro.');
    } else if (dia < 0) {
        console.log('Erro: O número não pode ser negativo.');
    } else if (dia > 6) {
        console.log('Erro: O número não pode ser maior que 6.');

    // Nunca entrará aqui porque o primeiro if já cobre esse caso, pois para testar caracteres especiais, o tipo de dado sempre é uma  string    
    } /* else if(regex.test(dia)) {
        console.log('Erro: O parâmetro não pode ser vazio ou conter caracteres especiais.');
    } */

    switch (dia) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sábado';
        default:
            return 'Dia inválido';
    }
}

console.log(diaSemana(4));
console.log(diaSemana(1));
console.log(diaSemana(2));
console.log(diaSemana(3));
console.log(diaSemana(4));
console.log(diaSemana(5));
console.log(diaSemana(6));