function converterF() {
    const tempC = Number(document.getElementById('tempC').value)
    const tempF = (tempC * 1.8) + 32 

    console.log('Farenheit é :'+ tempF + " °F");
}