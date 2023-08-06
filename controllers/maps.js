// const fetch = require( 'node-fetch' )

module.exports = {
    latLong: async (req, res) => {
        const address = '210 East 18th Street, Brooklyn, NY, USA'; // Replace this with the user-supplied address
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

        try {
            const response = await fetch(geocodeUrl);
            const data = await response.json();
            const location = data.results[0].geometry.location;
            const latitude = location.lat;
            const longitude = location.lng;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            res.render("whereami.ejs", { latitude, longitude });
          } catch (error) {
            console.error('Error fetching geocoding data:', error);
          }


        res.sendFile("../public/index.html");
    },
   boomBoom: () => {console.log('it maybe goes boom!')},
}