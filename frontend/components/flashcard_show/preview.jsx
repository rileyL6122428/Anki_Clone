var React = require('react');

var Preview = React.createClass({
  render: function () {

    return(
      <div className="Preview">
        <p>{ this.props.card.front }</p>
        <p>{ this.props.card.back }</p>
      </div>
    );
  }
});

module.exports = Preview;
