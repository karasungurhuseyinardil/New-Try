const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const ApiKey = '93a487f7bfd3bfbab8706d17be893dc0';
    const city = document.querySelector('.search-box input').value;

    if(city === '') 
        return;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=eng&units=metric&appid=${ApiKey}`).then(response => response.json()).then(json => {
            if(json.cod === '404') {
                container.style.height = '420px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error.style.display = 'block';
                error.classList.add('fadeIn');
                return;
            }

            error.style.display = 'none';
            error.classList.remove('fadeIn');

            const picture = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch(json.weather[0].main){
                case 'Clear':
                    picture.src = 'assets/sun.png';
                    break;
                case 'Rain':
                    picture.src = 'assets/rainy.png';
                    break;
                case 'Snow':
                    picture.src = 'assets/snowflake.png';
                    break;
                case 'Clouds':
                    picture.src = 'assets/cloudy.png';
                    break;
                case 'Mist':
                    picture.src = 'assets/mist.png';
                    break;
                    case 'Fog':
                    picture.src = 'assets/fog.png';
                    break;
                
                default:
                    picture.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;   
            humidity.innerHTML = `%${json.main.humidity}`;
            wind.innerHTML = `${json.wind.speed} km/s`;   
            
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '605px';
        });
    

});