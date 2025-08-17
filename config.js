// Configuration file for Weather Widget Chrome Extension
// Store your API keys and other configuration here

const config = {
    // OpenWeatherMap API Configuration
    openWeatherMap: {
        apiKey: '', // Replace with your actual API key
        baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
        units: 'metric',
        language: 'en'
    },
    
    // Extension Configuration
    extension: {
        name: 'Weather Widget',
        version: '1.0.0'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    // For browser/Chrome extension use
    window.weatherWidgetConfig = config;
} 