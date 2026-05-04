const tempratureField = document.querySelector(".temprature p");
const locationField = document.querySelector(".location_time p");
const dateAndTimeField = document.querySelector(".location_time span");
const conditionField = document.querySelector(".condition_icon p");
const iconField = document.querySelector(".weather_icon");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form');

form.addEventListener('submit', searchForLocation);

let target = 'Mumbai';

const fetchResults = async (targetLocation) => {
    let url = `https://api.weatherapi.com/v1/current.json?key=5adf5018b23346dd9a5155752260405&q=${targetLocation}&aqi=no`
    const res = await fetch(url)
    const data = await res.json()

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    let icon = data.current.condition.icon;

    updateDetails(temp, locationName, time, condition, icon);
}

function updateDetails(temp, locationName, time, condition, icon){
    let splitDate = time.split(' ')[0];
    let splitTime = time.split(' ')[1];
    let currentDay = getDayName(new Date(splitDate).getDay());

    tempratureField.innerText = `${temp}°C`;
    locationField.innerText = locationName;
    dateAndTimeField.innerText = `${splitTime} - ${currentDay}, ${splitDate}`;
    conditionField.innerText = condition;
    iconField.src = `https:${icon}`;
}

function searchForLocation(e){
    e.preventDefault();
    target = searchField.value;
    fetchResults(target);
}

fetchResults(target);

function getDayName(number){
    switch (number){
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
    }
}