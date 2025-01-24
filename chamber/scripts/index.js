const ctaElement = document.querySelector('.cta');
const weatherElement = document.querySelector('.current-weather-details');
const infoContainer = document.querySelector('#company-card-container');
const cardTemplate = document.querySelector('.company-card-template');

const lat = 7.613937391272886;
const lon = 5.230174925065836;
const apiKey = '3524ce2ac3a7b2e87398d0c172d72079';

const fetcCompanies = async () => {
    const response = await fetch('../chamber/data/company.json');
    const data = await response.json();
    console.log(data);
    populateCompaniesData(data);
};

const populateCompaniesData = (companies) => {
    getRandomThree(companies).forEach((company) => {
        const cloneCardTemplate = document.importNode(cardTemplate.content, true);
        cloneCardTemplate.querySelector('h2').textContent = company.name;
        cloneCardTemplate.querySelector('img').src = 'images/placeholder.png'; // company.icon;
        cloneCardTemplate.querySelector('img').alt = company.name;
        cloneCardTemplate.querySelector('.email').innerHTML = `<strong>Email: </strong> ${
            company.email || 'info@eksc.com'
        }`;
        cloneCardTemplate.querySelector(
            '.phone'
        ).innerHTML = `<strong>Phone: </strong> ${company.phone}`;
        cloneCardTemplate.querySelector(
            '.url'
        ).innerHTML = `<strong>URL: </strong> ${company.website}`;
        cloneCardTemplate.querySelector('.tag-line').textContent = 'Business Tag line';
        infoContainer.append(cloneCardTemplate);
    });
};

fetcCompanies();

const getRelativeWeathers = async () => {
    try {
        let result = localStorage.getItem('weather');
        if (result && result?.timeFetched && !isStaled(1)) {
            return result;
        }
        const res = await fetch(
            'https://api.openweathermap.org/data/2.5/forecast?lat=7.613937391272886&lon=5.230174925065836&appid=3524ce2ac3a7b2e87398d0c172d72079'
        );
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        result = await res.json();
        const arrList = result.list;
        const weather = {};
        weather.timeFetched = Date.now();
        arrList.forEach((list) => {
            // Use forEach for clarity
            const listDay = new Date(list.dt * 1000).getUTCDate(); // Multiply by 1000
            const todayDay = new Date().getUTCDate();

            switch (listDay) {
                case todayDay:
                    console.log('today', list.dt);
                    weather.today = list;
                    break; // Important: Add break here
                case todayDay + 1:
                    console.log('tomorrow', list.dt);
                    weather.tomorrow = list;
                    break; // Important: Add break here
                case todayDay - 1:
                    console.log('yesterday', list.dt);
                    weather.yesterday = list;
                    break; // Important: Add break here
                default:
                    break;
            }
        });
        localStorage.setItem('weather', JSON.stringify(weather));
        return weather;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const fetchApi = async () => {
    try {
        let result = localStorage.getItem('currentWeather');
        if (result && result?.timeFetched && !isStaled(result.timeFetched, 1)) {
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

function isStaled(givenTime, hour) {
    const currentTime = Date.now();
    const timePlusOneHour = givenTime + hour * 60 * 60 * 1000;
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

function getRelativeDates(days) {
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + days);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return formatDate(targetDate);
}

function getRandomThree(array) {
    const shuffled = [...array].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, 3); // Take the first three elements
}

fetchApi().then((response) => {
    populateWeatherInfo(response);
});
