function display(e){
    const apikey="bd5e378503939ddaee76f12ad7a97608"
    let parentdiv=e.parentElement
    let span=parentdiv.querySelectorAll('span')
    let array=(span[0].innerText).split(',')
    //console.log(array)
    let lat=array[0]
    let lon=array[1]
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`

    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((weatherinfo)=>{
        //console.log(weatherinfo)
        alert(`                 Weather Data
                 
                 Temp : ${weatherinfo.main.temp}
                 Mode : ${weatherinfo.weather[0].main}
                 Desciption : ${weatherinfo.weather[0].description}`)
    })
    .catch((error)=>{
        console.log(error)
    })
}