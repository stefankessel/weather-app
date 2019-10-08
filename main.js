// init local storage class/object
const storage = new Storage();
const storageData = storage.getStorage();

//init objects
const weather = new Weather(storageData.city,storageData.country);
const ui = new UI();

//change weather
document.getElementById('w-change-btn').addEventListener('click', (e) => {

    //get new values
    const city = document. getElementById('city').value;
    const country = document. getElementById('country').value;
    // change parameters
    weather.changeWeather(city, country);
    //set Local Storage
    storage.setStorage(city, country);
    //display new parameters
    getWeather();
    //close modal
    $('#locModal').modal('hide');
    document. getElementById('city').value = '';
    document. getElementById('country').value = '';
})

// display as soon as DOM is loaded
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.showWeather()
    .then( data => {
        ui.showResults(data);
    })
    .catch( err => {
        console.log(err);
    });
};
