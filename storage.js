class Storage{
    constructor(){
        this.city;
        this.country;
        this.defaultCity = 'Berlin';
        this.defaultCountry = 'de';
    }

    getStorage(){
        //get city
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem('city');
        }
        //get country
        if(localStorage.getItem('country') === null){
            this.country = this.defaultCountry;
        }else{
            this.country = localStorage.getItem('country');
        }
        //return object
        return {
            city: this.city,
            country: this.country
        }
    }

    setStorage(city, country){
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }

}