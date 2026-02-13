//fetch -> nativo da linguaem JavaScript, utilizado para fazer requisições HTTP
//fetch(url, options)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json()
    })
    .then(function(banana) {
        console.log(banana)
    })

/* 
url -> string com o endereço da requisição
options -> objeto com as configurações da requisição (método, headers, body, etc)
 */


//axios