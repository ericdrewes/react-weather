var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    //TODO: Change self-use to function.prototype.bind
    var self = this;

    this.setState({
      isLoading: true
    })

    openWeatherMap.getTemp(location).then(function (temp) {
      self.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, function (errorMessage) {
      self.setState({
        isLoading: false
      })
      alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
})

module.exports = Weather;