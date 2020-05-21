/*
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
*/
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {
    let coords = { name: direccion };
    try {
        coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima_async(coords.lat, coords.lng);
        coords.temp = temp;

        return coords;
    } catch (error) {
        throw (coords);
    }
}; // getInfo


getInfo(argv.direccion)
    .then(resp => {
        console.log(`El clima de "${resp.name}" es de ${resp.temp}`);
    })
    .catch(err => {
        let ciudad = err.name || 'la ciudad especificada';
        console.log(`No se ha podido determinar el clima para: ${ciudad}`);
    });