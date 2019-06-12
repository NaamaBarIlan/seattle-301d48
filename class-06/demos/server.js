'use strict';

// SET UP

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Application Setup
const PORT = process.env.PORT;
const app = express();
app.use(cors());

// API Routes
app.get('/ping', (request, response) =>{
  response.send('pong');
});

// http://localhost:3000/location?data=barcelona
// .request is convention, .query has to be called query, but .data can have any name, as long as it's the thing afer the '?'

app.get('/location', (request, response) => {
  // response.send(request.query.data);

  // DANGER: send mock data for now
  const mockLocationData = require('./data/geo.json');

  const mockLocationDataDigest = {
    search_query : request.query.data,
    formatted_query : mockLocationData.results[0].formatted_address,
    latitude : mockLocationData.results[0].geometry.location.lat,
    latitude : mockLocationData.results[0].geometry.location.lng,

  }
  // return mockLocation
  response.send(mockLocationDataDigest);
  // const location = new Location(request.query.data, mockLocationData.results[0]);

  response.send(location);

});

// Constructor Functions are more commonley used to represent 
function Location(query, geoData){
  this.query = query;
  this.formatted_query = geoData.formatted_address;
  this.lantitude = geoData.geometry.location.lat;
  this.longitude = geoData.geometry.location.lng;
}

// Refactor the searchToLatLong function to replace the object literal with a call to this constructor function:
// function Location(query, geoData) {
//   this.search_query = query;
//   this.formatted_query = geoData.result[0].formatted_address;
//   this.latitude = geoData.results[0].geometry.location.lat;
//   this.longitude = geoData.results[0].geometry.location.lng;
// }

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`) );
