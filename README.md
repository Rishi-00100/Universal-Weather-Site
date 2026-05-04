# 🌤️ Weather App

A real-time weather application built with **HTML, CSS & JavaScript** that fetches live weather data using the WeatherAPI. Search any city in the world and instantly get current weather conditions, temperature, time, and more.

![Weather App](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🔗 Live Demo

👉 [View Live Project](#) <!-- Replace with your Vercel link -->

---

## 📸 Preview

<!-- ![Weather App Preview] <img width="1919" height="523" alt="Screenshot 2026-05-04 225551" src="https://github.com/user-attachments/assets/bb8eeccc-52fb-4157-a810-4683ef767947" />
-->

---

## ✨ Features

- 🔍 **City Search** — Search weather for any city in the world
- 🌡️ **Real-time Temperature** — Displays current temperature in °C
- 🕐 **Local Time & Date** — Shows the local time and day for the searched city
- 🌤️ **Weather Condition** — Displays current weather condition (Sunny, Rainy, Mist, etc.)
- 🖼️ **Weather Icon** — Dynamic icon that changes based on current weather
- ⚡ **Instant Results** — Fetches and displays data on search submit

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and markup |
| CSS3 | Styling and layout |
| JavaScript (ES6+) | Logic, DOM manipulation, API calls |
| WeatherAPI | Live weather data source |
| Fetch API | Async HTTP requests |
| Git & GitHub | Version control |

---

## 📁 Project Structure

```
weather-app/
│
├── index.html       # Main HTML structure
├── style.css        # All styling and layout
├── script.js        # JavaScript logic and API calls
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- A free API key from [WeatherAPI](https://www.weatherapi.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOURUSERNAME/weather-app.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd weather-app
   ```

3. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use Live Server extension in VS Code

4. **Add your API key**
   - Sign up at [weatherapi.com](https://www.weatherapi.com/) for a free API key
   - In `script.js`, replace the API key in the URL:
   ```js
   let url = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${targetLocation}&aqi=no`
   ```

---

## 🌐 API Reference

This project uses the **WeatherAPI** free tier.

- **Base URL:** `https://api.weatherapi.com/v1`
- **Endpoint:** `/current.json`
- **Method:** `GET`
- **Docs:** [WeatherAPI Documentation](https://www.weatherapi.com/docs/)

### Example API Response (simplified)

```json
{
  "location": {
    "name": "Delhi",
    "localtime": "2026-05-04 13:11"
  },
  "current": {
    "temp_c": 17.6,
    "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png"
    }
  }
}
```

---

## 💡 How It Works

1. On page load, the app fetches weather data for **Mumbai** by default
2. User types a city name in the search bar and clicks **Search**
3. The app sends a `GET` request to WeatherAPI with the city name
4. The API returns JSON data with weather details
5. JavaScript parses the response and updates the DOM dynamically
6. Temperature, location, time, condition and icon all update instantly

---

## 🔮 Future Improvements

- [ ] Auto-detect user location using Geolocation API
- [ ] 5-day weather forecast section
- [ ] Dynamic background that changes with weather condition
- [ ] Error handling for invalid city names
- [ ] Humidity, wind speed and feels like temperature
- [ ] Toggle between °C and °F
- [ ] Loading spinner while fetching data

---

## 📝 What I Learned

- Working with **REST APIs** and the `fetch()` method
- Using **async/await** for handling asynchronous JavaScript
- **DOM manipulation** to dynamically update UI elements
- Parsing and extracting data from **JSON responses**
- Working with **template literals** for dynamic URL building
- Handling **date and time** formatting in JavaScript

---

## 👨‍💻 Author

**Udbhav Singh**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
---

⭐ If you found this project helpful, please give it a star on GitHub!
