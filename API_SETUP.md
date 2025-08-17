# Weather Widget API Setup Guide

## ⚠️ IMPORTANT: API Key Configuration Required

**The extension currently has a placeholder API key and will not work until you configure it.**

## Getting Your Free OpenWeatherMap API Key

1. **Visit OpenWeatherMap**: Go to [https://openweathermap.org/api](https://openweathermap.org/api)

2. **Sign Up for Free Account**: 
   - Click "Sign Up" or "Get API Key"
   - Create a free account
   - Verify your email address

3. **Get Your API Key**:
   - After verification, you'll receive your free API key
   - **Note**: New API keys may take 2-4 hours to activate
   - The free tier includes:
     - 1,000 calls per day
     - Current weather data
     - 5-day forecast (3-hour step)
     - Weather maps

## Configuring the Extension

1. **Open `getWeather.js`** in your extension folder

2. **Find this line** (around line 35):
   ```javascript
   var apiKey = 'YOUR_API_KEY_HERE'; // Replace this!
   ```

3. **Replace with your actual API key**:
   ```javascript
   var apiKey = 'abc123def456ghi789'; // Your actual key here
   ```

4. **Save the file**

## Testing Your Setup

1. **Reload the extension** in Chrome:
   - Go to `chrome://extensions/`
   - Find your Weather Widget extension
   - Click the refresh/reload button

2. **Test with a city name**:
   - Try searching for "London", "New York", or "Tokyo"
   - Check the browser console for any error messages

## Troubleshooting

- **"Invalid API key"**: Your API key is incorrect or not yet activated
- **"City not found"**: Check spelling and try different city names
- **"Rate limit exceeded"**: Free tier allows 1,000 calls per day
- **"Network error"**: Check your internet connection

## Common Issues

- **API key not working immediately**: New keys take 2-4 hours to activate
- **Wrong API key format**: Make sure you copied the entire key correctly
- **Extension not reloaded**: Always reload the extension after changing code

## Security Note

- Never share your API key publicly
- The API key is only used for weather data requests
- All requests are made over HTTPS 