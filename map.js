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

filmesFavoritos.map(function(item, index, array) {
    console.log(`${index+1}º Elemento: ${item}`)
})