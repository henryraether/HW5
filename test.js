// We wrote and provided this function so that you won't have to worry about constructing the forecast html.
// It's job is to return the html string already styled.
// It was already in your code.  You can change it if you want to see what will happen, but otherwise feel free to ignore it.
function forecastHTML(dailyForecast) {
    return `
      <div class="text-center space-y-2">
        <img src="https:${dailyForecast.day.condition.icon}" class="mx-auto">
        <h1 class="text-2xl text-bold text-gray-500">${dailyForecast.date}</h1>
        <h2 class="text-xl">${dailyForecast.day.mintemp_f} - ${dailyForecast.day.maxtemp_f}</h2>
        <p class="text-gray-500">${dailyForecast.day.condition.text}</h1>
      </div>
    `
  }
  ​
  // You may want to write other functions, but you don't need to!
  // All your code can go inside of this event listener ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
  window.addEventListener('DOMContentLoaded', function() {
    // ******* YOUR CODE STARTS HERE *******
  ​
    // 2. find the "Chicago" city button using querySelector() and add a click event listener
  ​
    let chicagoButton = document.querySelector('#chicago-forecast')
    chicagoButton.addEventListener('click', async function(event) {
      event.preventDefault() // supress the browser's default click behavior
  ​
      // 3. when event occurs (i.e. inside the listener function):
      //    a. find the forecast header (use the selector .forecast-header) and modify its innerHTML to `${location} Forecast`
  ​
      let location = 'Chicago'
      let forecastHeader = document.querySelector('.forecast-header')
      forecastHeader.innerHTML = `${location} Forecast`
  ​
  ​
      //    b. fetch the api response from https://api.weatherapi.com/v1/forecast.json?key=YOUR_KEY&q=LOCATION&days=3 // replace YOUR_KEY and LOCATION
  ​
      // let apiKey = '' // <<<< uncomment and fill in with your api key from step 1 (or the api key we provided)
      let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`)
  ​
      //    c. extract the json using the .json() function
  ​
      let json = await response.json()
      // console.log(json) // uncomment this line to optionally logging so you can see what the API data is from weatherapi.com
  ​
      //    d. find the array of daily forecast data, loop through it and, insefrt HTML with each day's forecast using the forecastHTML() function
  ​
      let days = json.forecast.forecastday // find the array within the data
  ​
      document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast html from a previous click
  ​
      // looping through the array
      for (let i = 0; i < days.length; i++) {
        let day = days[i]
        // console.log(day) // uncomment this line to optionally logging so you can see what the daily forecast data is
  ​
        // inserting html with each day's forecast using the forecastHTML() function we provided/wrote for you (defined above)
        let forecastDiv = document.querySelector('.forecast')
        let html = forecastHTML(day)
        // console.log(html) // uncomment this line to optionally logging so you can see what html is
        forecastDiv.insertAdjacentHTML('beforeend', `${html}`)
      }
    })
  ​
  })
  