// Configuration file for Weather Widget
const WEATHER_CONFIG = {
    // OpenWeatherMap API Configuration
    OPENWEATHER_API_KEY: 'key', // Get your free API key from https://openweathermap.org/api
    
    // API Endpoints
    WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5/weather',
    
    // Default settings
    DEFAULT_UNITS: 'metric', // metric, imperial, or kelvin
    DEFAULT_LANGUAGE: 'en'   // language for weather descriptions
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEATHER_CONFIG;
} 