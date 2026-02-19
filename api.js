//fetch -> nativo da linguaem JavaScript, utilizado para fazer requisições HTTP
//fetch(url, options)

// exemplo de requisição GET utilizando fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        // Transformar os itens que são objetos dentro do array em string para imprimir no console
        //console.log(`Data: ${JSON.stringify(data)}`)

        //imprimir o objeto formatado com espaços
        console.log(`Data formatada: ${JSON.stringify(data, null, 4)}`)

    })

/* 
url -> string com o endereço da requisição
options -> objeto com as configurações da requisição (método, headers, body, etc)
 */


//axios