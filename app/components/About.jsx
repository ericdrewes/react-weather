var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-centered page-title">About</h1>
      <p>This is a <a href="https://facebook.github.io/react/" alt="The official ReactJS page">ReactJS</a> learning project,
       wich uses the <a href="https://openweathermap.org/" alt="The OpenWeatherMap Documentation">OpenWeatherMapApi</a> 
       to fetch the weather, and the current temeature on the input location.</p>
      <p>You can find the full source code on my <a href="https://github.com/blascsi/react-weather" 
      alt="The repository of the project">GitHub profile!</a></p>
    </div>
  );
}

module.exports = About;