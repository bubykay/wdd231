const ctaElement = document.querySelector('.cta');
const weatherElement = document.querySelector('.current-weather-details');

const lat = 7.613937391272886;
const lon = 5.230174925065836;
const apiKey = '3524ce2ac3a7b2e87398d0c172d72079';

const fetchApi = async () => {
    try {
        let result = localStorage.getItem('currentWeather');
        if (result && result?.timeFetched && !isStaled(result.timeFetched)) {
            return JSON.parse(result);
        }

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        result = await res.json();
        result.timeFetched = Date.now();
        localStorage.setItem('currentWeather', JSON.stringify(result));

        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

function isStaled(givenTime) {
    const currentTime = Date.now();
    const timePlusOneHour = givenTime + 1 * 60 * 60 * 1000;
    return currentTime >= timePlusOneHour;
}

ctaElement.addEventListener('click', () => {
    window.location.href = 'directory.html';
});

function getHourNow(time, timezone) {
    const currentTime = new Date(time * 1000 + timezone * 1000).getUTCHours();
    const ampm = currentTime >= 12 ? 'PM' : 'AM';
    const hour12 = currentTime % 12 || 12;
    return `${hour12} ${ampm}`;
}

function populateWeatherInfo(response) {
    const {
        main: { temp, temp_max, temp_min, humidity },
        sys: { sunrise, sunset },
        weather,
        timezone,
    } = response;

    weatherElement.innerHTML = `<strong>${temp}°C</strong> <br />
    ${weather[0].description} <br /> 
    High: ${temp_max}°C <br /> 
    Low: ${temp_min}°C <br /> 
    Humidity: ${humidity}% <br />
    Sunrise: ${getHourNow(sunrise, timezone)} <br /> 
    Sunset: ${getHourNow(sunset, timezone)}
    `;
}

fetchApi().then((response) => {
    populateWeatherInfo(response);
});
