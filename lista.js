const filmesFavoritos = []

console.log(filmesFavoritos);

filmesFavoritos.push('Robocop')
filmesFavoritos.push('O Senhor dos Anéis')
filmesFavoritos.push('Star Wars')
filmesFavoritos.push('Chiquititas') // não é filme
filmesFavoritos.push('Interstellar')
filmesFavoritos.push('Um Kickboxer muito louco')
filmesFavoritos.push('Loucademia de Polícia')

filmesFavoritos.push('Robocop', 'O Filho do Máscara')

//propriedade length
console.log(filmesFavoritos, filmesFavoritos.length);

//consigo acessar itens pelo seu índice
// os elementos sempre começam na posição 0 (zero)
//acessando elemento específico pelo indice 
console.log(filmesFavoritos[3]);

//substituir o valor de um elemento do array através do seu índice 
filmesFavoritos[8] = 'A Hora do Rush'

console.log(filmesFavoritos)