var React = require('react');

var Navbar = require('Navbar');

var Main = (props) => {
  return (
    <div>
      <Navbar/>
      <div className="row">
        <div className="medium-6 large-4 columns small-centered vertical-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;