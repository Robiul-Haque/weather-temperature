// search the city
const search = () => {
    const search = document.getElementById('search-field');
    const search_lower_case = search.value.toLowerCase();
    
    loadTemperature(search_lower_case);
    search.value = '';
}

// search the city with enter key button
document.getElementById('search-field').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const search = document.getElementById('search-field');
        const search_lower_case = search.value.toLowerCase();

        loadTemperature(search_lower_case);
        search.value = '';
    }
});

// call the open weather api
const loadTemperature = async city_name => {
    try {
        const api_key = '677de79dcaf44873016354f0ed2ab1c3';
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`);
        const response = await api_url.json();

        showTemperature(response);
    } catch (error) {
        console.log(error);
    }
}

loadTemperature('faridpur');

// display temperature info in the web page
const showTemperature = (response) => {
    //  location
    const location = document.getElementById('weather-location');
    // temperature
    const temperature_element = document.getElementById('weather-temperature');
    // country
    const country = document.getElementById('country');

    if (response.name) {
        location.innerText = response.name;
        temperature_element.innerText = response.main.temp;
        country.innerText = response.sys.country;
    } else {
        location.innerText = 'No data found, please try again';
        temperature_element.innerText = '';
        country.innerText = '';
        const deg_symbol = document.getElementById('deg-symbol');
        deg_symbol.setAttribute('class', 'd-none');
    }
}