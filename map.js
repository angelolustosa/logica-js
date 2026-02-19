console.log('============== map ==============');
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

const filmes2 = filmesFavoritos.map(function(item, index, array) {
    //console.log(`${index+1}º Elemento: ${item}`)
    return `${index+1}º Elemento: ${item}`
})

console.log(filmesFavoritos, filmes2)