function getWeather(){
    // apikey
    let apiKey = "0425777c2f4117ad5bd3bf3dfb41d158"    
    let city_name = document.getElementById("searchBar").value;     
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${apiKey}`
        //calling api
        fetch(url,{method:'GET'})   
        .then((res) => res.json())  
        .then((data) => {           
        
        console.log(data); 
    
        console.log(data.name); 
        document.getElementById("weatherInCity").innerText = `weather in ${data.name}`;
    
        document.getElementById("weather").innerText = `${data.main.temp}°c`;
    
        let icon =  `${data.weather[0].icon}`;
        console.log(icon); //log city from recevied data
    
        let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
        console.log(iconUrl);     
        document.getElementById("img").src = `${iconUrl}` ;
    
        console.log(`${data.weather[0].description}`); //log description from recevied data
        document.getElementById("description").innerText = `${data.weather[0].description}`;
    
        console.log(`humidity: ${data.main.humidity}%`); //log humidity from recevied data
        document.getElementById("humidity").innerText = `humidity: ${data.main.humidity}%`;
    
        console.log(`wind speed: ${data.wind.speed} KM/h`); //log wind speed from recevied data
        document.getElementById("wind").innerText = `wind speed: ${data.wind.speed} KM/h`;
    
    }
    )
    }