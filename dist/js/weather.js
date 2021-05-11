const temp = document.getElementById('temp');
const desc = document.getElementById('desc');
const city = document.getElementById('city');

window.addEventListener('load', () => {
    let lat;
    let long;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8919d6deaf60f2b54379b12c374546b9`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    city.textContent = data.name;
                    desc.textContent = data.weather[1].description;
                    // temp.textContent = data.main.temp;
                })
        });
    }
})