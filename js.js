


fetch("https://api.unsplash.com//photos/random?orientation=landscape&query=bodybuilding&client_id=fryO-AzLGdjj_GyWSyeykcpDWCbMHcsWGKdvPgGf4p8")
    .then(res => res.json())
    .then(data => {
        // throw Error ("something went wrong")
        console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        // document.getElementById("name").innerHTML = `${data.user.first_name}`
    })
    .catch(function(error) {
        console.error(error)
        document.body.style.backgroundColor = "black"


    })

    


function updateClock () {
    
    let startTime = new Date()
    let updatedTime = startTime.toLocaleTimeString('en-US',  {timeStyle: 'short' })
    document.getElementById("time").innerHTML = updatedTime
 
}

setInterval(updateClock, 1000)




navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=218ae9315116b9c8574157a7b5a2fa05`)
        .then(res => {
            if (!res.ok) {
                throw error ("weather data not available")
            } else 
            return res.json()
        })
        .then(data => {
            console.log(data)
        
            document.getElementById("weather").innerHTML = `<p class = "temp">${Math.floor(data.main.temp)}º</p>`

        

            document.getElementById("weather").innerHTML += `<img class="icon" src = http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png >`

            document.getElementById("weather").innerHTML += `<p class = "city">${data.name}</p>`


     

        })
        .catch(err => console.error(err))

});

