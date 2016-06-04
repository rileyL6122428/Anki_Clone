var React = require('react');

var Front =  React.createClass({
  render: function () {
    if (!this.props.showing) { return <div></div>; }
    return (
      <div className="Front">
        <div className="Spacer"/>
        <div className="Card-Front">{ this.props.cardFront }</div>
        <div className="Spacer"/>
        <button className="Normal-Button" onClick={ this.props.flipCB }>Flip</button>
      </div>
    );
  }
});

module.exports = Front;
