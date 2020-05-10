console.log('Client side javascript file loading...!');


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const data_1 = document.querySelector('#data-1')
const data_2 = document.querySelector('#data-2')
const data_3 = document.querySelector('#data-3')
const data_5 = document.querySelector('#data-5')
const data_6 = document.querySelector('#data-6')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    data_1.textContent = 'Loading....'
    data_2.textContent = ''
    data_6.textContent = ''
    data_3.textContent = ''
    data_5.textContent = ''

    document.getElementById("data-4").src = '/img/default.png'

    fetch('http://localhost:3000/weather?address=' + location)
        .then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    data_1.textContent = data.error; 
                } else {
                    data_1.textContent = data.location;
                    data_2.textContent = data.forecast.temp + '`c';
                    data_6.textContent = data.forecast.weather[0].description;
                    data_3.textContent = 'Humidity: ' + data.forecast.humidity + '%';
                    document.getElementById("data-4").src = 'http://openweathermap.org/img/wn/' + data.forecast.weather[0].icon + '@2x.png';
                    data_5.textContent = 'Wind: ' + data.forecast.wind_speed + ' m/s';
                }
            })
        })

})