const axios = require('axios');

const getLugarLatLng_old = (direccion) => {
    const direccion_uri = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion_uri}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'c80c78e4d9msh58de10c72ec2ad7p183a7bjsn2ca131a5f0a4' },
    });

    instance.get()
        .then(resp => {
            let data = resp.data;
            let results = data.Results;
            console.log(results);
        })
        .catch(err => {
            console.log(err);
        });

}; // getLugarLatLng_old

const getLugarLatLng = async(direccion) => {
    const direccion_uri = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion_uri}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'c80c78e4d9msh58de10c72ec2ad7p183a7bjsn2ca131a5f0a4' },
    });

    const resp = await instance.get();
    const results = resp.data.Results;
    if (results.length == 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = results[0];
    const name = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        name,
        lat,
        lng
    };
}; // getLugarLatLng

module.exports = {
    getLugarLatLng
}