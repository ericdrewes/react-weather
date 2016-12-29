var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h5>It's {temp} °C in {location}</h5>
  );
}

module.exports = WeatherMessage;