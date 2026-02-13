//Métodos para percorrer um array
console.log('============== for ==============');
const filmesFavoritos = [
  'Robocop',
  'O Senhor dos Anéis',
  'Star Wars',
  'Chiquititas',
  'Interstellar',
  'Um Kickboxer muito louco',
  'Loucademia de Polícia',
  'Robocop',
  'A Hora do Rush'
]
//for tradicional
/* 
    //estrutura padrão do for
    for(inicio; condição; incremento) {

    } 
*/

/* 
    let i = 0 -> vai iniciar a variável i com o valor 0 (primeira posição do array)
    i < filmesFavoritos.length -> a condição para o loop continuar é que i seja menor do que o tamanho do array (length)
    i++ -> a cada iteração do loop, a variável i será incrementada em 1 (passará para o próximo índice do array)
*/

/* [
  'Robocop',
  'O Senhor dos Anéis',
  'Star Wars',
  'Chiquititas',
  'Interstellar',
  'Um Kickboxer muito louco',
  'Loucademia de Polícia',
  'Robocop',
  'A Hora do Rush'
] */
// entendo para imprimir a variável auxiliar i, que representa o índice do array, e filmesFavoritos[i], que representa o elemento do array na posição i
for ( let i = 0; i < 9; i++) {
    console.log(i)
}

for ( let i = 0; i < filmesFavoritos.length; i++) {
    console.log(filmesFavoritos[i])
}

