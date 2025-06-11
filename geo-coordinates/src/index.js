import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  var longitudeValue = 0;
  var latitudeValue = 0;

  window.navigator.geolocation.getCurrentPosition(
      (position) => {
          console.log(position);
          longitudeValue = position.coords.longitude;
          latitudeValue = position.coords.latitude;
      },
      (error) => console.log(error)
  );

  // zasto se uvek ispisu nule iako consle.log(position) dobavi lokaciju
  return <div>Hello user! Your position is at longitude: {longitudeValue} and latitude: {latitudeValue}</div>
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App/>,
);
