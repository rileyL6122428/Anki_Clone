var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  render: function() {
    return(
      <div className="Header">
        <Link to="/dashboard" className="Cancel">Cancel</Link>
        <h1>New Deck</h1>
      </div>
    );
  }
});

module.exports = Header;
