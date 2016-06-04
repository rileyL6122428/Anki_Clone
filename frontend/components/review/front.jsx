var React = require('react');

var Front =  React.createClass({
  render: function () {
    if (!this.props.showing) { return <div></div>; }
    return (
      <div>
        <div>{ this.props.cardFront }</div>
        <button onClick={ this.props.flipCB }>Flip</button>
      </div>
    );
  }
});

module.exports = Front;
