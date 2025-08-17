# Chrome Extension Weather Widget

A simple Google Chrome extension for getting current weather information for any city.

## Features

- Search for any city to get current weather
- Displays Local Time, Temperature, Weather Description, Humidity, and Wind Speed
- Clean, responsive UI with Bootstrap styling
- Real-time weather data from OpenWeatherMap API

## Setup

### 1. Get OpenWeatherMap API Key

1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Note: New API keys may take a few hours to activate

### 2. Configure the Extension

1. Open `config.js` in the extension directory
2. Replace the `apiKey` value with your actual OpenWeatherMap API key:
   ```javascript
   openWeatherMap: {
       apiKey: 'your_actual_api_key_here', // Replace this!
       // ... other config
   }
   ```

### 3. Install the Extension

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the extension directory
4. The Weather Widget extension should now appear in your extensions list

## Usage

1. Click on the Weather Widget extension icon in your Chrome toolbar
2. Enter a city name in the search field
3. Click "Get Weather" to fetch current weather information
4. View the results including temperature, humidity, wind speed, and local time

## File Structure

- `popup.html` - Main extension popup interface
- `getWeather.js` - Weather fetching logic and UI interactions
- `config.js` - Configuration file containing API keys and settings
- `manifest.json` - Extension manifest file
- `background.js` - Background script for extension functionality

## API Configuration

The extension uses OpenWeatherMap's free API tier with the following limits:
- 60 calls per minute
- 1,000,000 calls per month
- Metric units (Celsius)
- English language descriptions

## Security Notes

- API keys are stored in `config.js` (not committed to version control)
- The extension only makes requests to OpenWeatherMap's official API
- No user data is stored or transmitted to third parties

## Troubleshooting

- **"Please configure your OpenWeatherMap API key"**: Make sure you've added your API key to `config.js`
- **"Invalid API key"**: Verify your API key is correct and activated
- **"City not found"**: Check the city name spelling and try again
- **"Rate limit exceeded"**: Wait a moment before making another request