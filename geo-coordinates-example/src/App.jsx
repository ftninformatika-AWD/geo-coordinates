import React from "react";

const App = () =>  {

  let longitudeValue = 0;
  let latitudeValue = 0;

  window.navigator.geolocation.getCurrentPosition(
      (position) => {
          console.log(position);
          longitudeValue = position.coords.longitude;
          latitudeValue = position.coords.latitude;
      },
      (error) => console.log(error)
  );

  // zasto se uvek ispisu nule iako consle.log(position) dobavi lokaciju
  return (
    <>
      <h1>Geo coordinates example</h1>
      <p>Hello user! Your position is at longitude: {longitudeValue} and latitude: {latitudeValue}</p>
    </>
  )
};

export default App;
