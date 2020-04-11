function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
 /*   fetch('http://localhost:8080/test') */
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=80013&appid=a57db8cc0826e3bdf6d50bc381ea8998')
    .then(res => res.json())
    .then(function(res) {
        /*document.getElementById('results').innerHTML = res.message */
        document.getElementById('results').innerHTML = res.main.temp
    })
}

export { handleSubmit }
