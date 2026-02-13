const imovel = {
    endereco: 'Rua 01, 500',
    valor: 546.000,
    //dimensao: 11
    area: 117, //m2
    tipo: 'Apartamento',
    qtd_quartos: 3,
    eletrodomesticos: ['microondas', 'ar-condicionado'],
    cozinha_americana: true
}

//imprimindo no console
console.log(imovel)

//acessando propriedade
console.log(imovel.qtd_quartos);

//acessando a propriedade de um objeto quando o nome vem por uma variável
const propriedade = 'valor'
console.log(imovel['cozinha_americana']);



//Crie um objeto que representa uma pessoa
const pessoa = {
    nome: 'Guilherme Viana',
    idade: 19,
    cpf: 32429837854,
    altura: 1.67,
    falar: function() {
        return `Oi! Tudo bom!, Me chamo ${this.nome}, eu tenho ${this.idade} anos`
    }
}

// criando um objeto vazio
//let turma = {}
let turma = {
    nome: 'FS36-Sul',
    professor: 'Angelo',
    qtd_alunos: 17,
    modulo: 'Lógica',
    nome: 'teste'
}

//incluir atributos/propriedade/chave ao objeto
console.log(turma.sede);

console.log(turma);

//imprimir todos as propriedades do objeto
const properties = Object.keys(turma)
console.log(properties);

//imprimir todos os valores do objeto
const values = Object.values(turma)
console.log(values);






