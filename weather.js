
class Weather{
    constructor(city, country){
        this.city = city;
        this.country = country;
        this.key = 'insert your own key';
    }
    // fetch weather from API
    async showWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.key}&units=metric`);

        const responseData = await response.json();

        return responseData
        
    }
    changeWeather(city, country){
        this.city = city;
        this.country = country;
    }
}