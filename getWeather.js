jQuery(document).ready(function() {
    
    jQuery('.result').hide();
    //jQuery('.note').hide();
    jQuery('.note_desc').hide();
    jQuery('.note').click(function () {
        jQuery('.note_desc').fadeToggle();
    });

    // Listen for messages from background script (Manifest V3 compatibility)
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            if (request.message === "clicked_browser_action") {
                // Handle the action click if needed
                console.log("Action clicked from background script");
            }
        });
    }

    jQuery('#search').click(function() {
        var city = jQuery('#city').val();
        var numbers_present = /\d/.test(city);
        if(city.length < 3 || numbers_present === true) {
            alert("Please add proper city for getting current weather forecast.");
            return false;
        }
        
        // IMPORTANT: Replace this with your actual OpenWeatherMap API key
        // Get your free API key from: https://openweathermap.org/api
        var apiKey = 'key'; // Replace this!
        
        // Check if API key is still the placeholder value
        if (apiKey === 'YOUR_API_KEY_HERE's) {
            alert("Please configure your OpenWeatherMap API key!\n\n" +
                  "1. Visit: https://openweathermap.org/api\n" +
                  "2. Sign up for a free account\n" +
                  "3. Get your API key\n" +
                  "4. Replace the API key in getWeather.js with your actual key\n\n" +
                  "Note: New API keys may take a few hours to activate.");
            return false;
        }
        
        // Using OpenWeatherMap API (free tier)
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(city) + 
                  '&appid=' + apiKey + 
                  '&units=metric' + 
                  '&lang=en';

        console.log('Fetching weather for:', city);
        console.log('API URL:', url);

        jQuery.getJSON(url, function(json_data){
            console.log('API Response:', json_data);
            
            if (json_data.cod !== 200) {
                var errorMsg = json_data.message || 'Unknown error';
                if (json_data.cod === 401) {
                    errorMsg = "Invalid API key. Please check your OpenWeatherMap API key.";
                } else if (json_data.cod === 404) {
                    errorMsg = "City not found. Please check the city name and try again.";
                } else if (json_data.cod === 429) {
                    errorMsg = "Rate limit exceeded. Please try again later.";
                }
                alert("Error: " + errorMsg);
                return false;
            } else {
                var cityName = json_data.name;
                var country = json_data.sys.country;
                var temperature = Math.round(json_data.main.temp);
                var description = json_data.weather[0].description;
                var humidity = json_data.main.humidity;
                var windSpeed = json_data.wind.speed;
                var localTime = new Date().toLocaleString();
                
                jQuery('#search_form').hide();
                jQuery('.note_desc').hide();
                jQuery('.note').hide();
                jQuery('.result').show();
                
                jQuery('.city').html(cityName + ', ' + country);
                jQuery('.result .localTime').html(localTime);
                jQuery('.result .currentTemp').html(`<p>${temperature}°C</p>`);
                jQuery('.result .currentDesc').html(description.charAt(0).toUpperCase() + description.slice(1));
                jQuery('.result .humidity').html(`<p>${humidity}%</p>`);
                jQuery('.result .windSpeed').html(`<p>${windSpeed} m/s</p>`);
                
                console.log('Weather data displayed successfully');
            }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.error('API Request Failed:', {
                status: jqXHR.status,
                statusText: jqXHR.statusText,
                responseText: jqXHR.responseText,
                textStatus: textStatus,
                errorThrown: errorThrown
            });
            
            if (jqXHR.status === 401) {
                alert("API key error. Please check your OpenWeatherMap API key.");
            } else if (jqXHR.status === 429) {
                alert("Rate limit exceeded. Please try again later.");
            } else if (jqXHR.status === 0) {
                alert("Network error. Please check your internet connection.");
            } else {
                alert("Error fetching weather data. Status: " + jqXHR.status + "\n\nPlease try again later.");
            }
        });
        
        return false;
    });
});