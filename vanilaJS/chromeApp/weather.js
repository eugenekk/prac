const weather = document.querySelector(".js-weather")
const API_KEY = "c5c60d18e4ed8cb1b384f8c60bb25fe5";
const COORS = 'coords'


function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json()
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature}'C @${place}`
    })
}
function saveCoords(coordsObj){
    localStorage.setItem(COORS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj)
    getWeather(latitude, longitude)
}

function handleGeoError(){
    console.log("error")
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //getWeather
        const parseCoords = JSON.parse(loadedCoords);
        console.log("parseC", parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude)
    }
}

function init(){
    loadCoords();
}
init();


