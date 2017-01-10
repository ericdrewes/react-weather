var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var city = this.refs.city.value;

    if (city.length > 0) {
      this.refs.city.value = '';
      this.props.onSearch(city);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Search by city" ref="city" className="search-city" />
          <button className="hollow expanded button">Get Weather</button>
        </form>
      </div>
    );
  }
})

module.exports = WeatherForm;