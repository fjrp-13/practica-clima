const axios = require('axios');
const api_url = 'https://api.openweathermap.org/data/2.5/weather';

const getClima_async = async(lat, lng) => {
    try {
        const response = await axios.get(api_url, {
            params: {
                lat,
                lon: lng,
                appid_f: '7034d2567ac5f203fe924d3eb1b8619a',
                appid: '32f843d833c38373032f825c4a92418a',
                units: 'metric'
            }

        });
        return (response.data.main.temp);
    } catch (error) {
        throw new Error(error);
    }
}; // getClima_async

const getClima = (lat, lng) => {
    let temperatura = '';
    axios.get(api_url, {
            params: {
                lat,
                lon: lng,
                appid_f: '7034d2567ac5f203fe924d3eb1b8619a',
                appid: '32f843d833c38373032f825c4a92418a',
                units: 'metric'
            }
        })
        .then(function(response) {
            temperatura = response.data.main.temp;
        })
        .catch(function(error) {
            throw new Error(error);
        })
        .finally(function() {
            return temperatura;
        });
}; // getLugarLatLng

module.exports = {
    getClima,
    getClima_async
}