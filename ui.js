class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.maxTemp = document.getElementById('w-maxTemp');
        this.minTemp = document.getElementById('w-minTemp');
        this.wind = document.getElementById('w-wind');
    }
    showResults(result){
        this.location.textContent = `${result.name}, ${result.sys.country}`;
        this.desc.textContent = result.weather[0].description;
        this.string.textContent = result.main.temp+ ' Celsius';
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${result.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${result.main.humidity} %`;
        this.maxTemp.textContent = `Max Temperature: ${result.main.temp_max} Celsius`;
        this.minTemp.textContent = `Min Temperature: ${result.main.temp_min} Celsius`;
        this.wind.textContent = `Wind: ${result.wind.speed}`;
    }
    // convert timestamp method,
    currentTime(unix_timestamp){
        const date = new Date(unix_timestamp*1000);
        // Hours part from the timestamp
        const hours = date.getHours();
        // Minutes part from the timestamp
        const minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        const seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime;
    }
}