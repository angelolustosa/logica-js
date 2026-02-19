fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {

        data.forEach(function(usuario){
            console.log(usuario.address.suite)
        });

    })