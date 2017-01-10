var React = require('react');

var ErrorModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  getDefaultProps: function () {
    return {
      title: 'Error'
    }
  },
  componentDidMount: function () {
    // Create a new Foundation Reveal instance, and set witch gets controlled
    // by it in the DOM
    var modal = new Foundation.Reveal($('#error-modal'));
    // Reveal the DOM element, when this component gets mounted
    modal.open();
  },
  render: function () {
    var {title, message} = this.props;

    return (
      <div id="error-modal" className="tiny reveal text-center" data-reveal="error-modal">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="hollow button" data-close="error-modal">Okay.</button>
        </p>
      </div>
    );
  }
})

module.exports = ErrorModal;