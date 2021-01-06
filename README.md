# chrome-extension-weather-widget
Google Chrome Extension


Created a Simple Google Chrome Extension for getting current weather.

User needs to search for proper city, and extension will respond back with Local Time
Temperature and Weather Description.

Extension in back end calls an API which I built in Apigee.
Its a simple proxy setup done from free account of Apigee Edge.
Used Quota Policy to limit exponential spam api calls.
Used Extract Variables Policy to extract the city entered by user.
Used KVM Operations Policy to get the secret access_key from weatherstack, this makes it safe so no one can see secret key.
Assign Message Policy to pass on City to Target Endpoint / Target API call.
Apigee proxy in turn calls an API from weatherstack.com (free).

Currently the response output is not altered.