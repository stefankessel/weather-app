
class Weather{
    constructor(city, country){
        this.city = city;
        this.country = country;
        this.key = '041ba572f37d541c99a91ef5411ab84d';
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