var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer =  require('react-dom/server');

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
    // Fix for foundation, so it can close the modal without using react
    var {title, message} = this.props;

    var modalMarkup = (
      <div id="error-modal" className="tiny reveal text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="hollow button" data-close="">Okay.</button>
        </p>
      </div>
    );
    // Create a new Foundation Reveal instance, and set witch gets controlled
    // by it in the DOM

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    // Reveal the DOM element, when this component gets mounted
    modal.open();
  },
  render: function () {
    return (
      <div>
      </div>
    );
  }
})

module.exports = ErrorModal;