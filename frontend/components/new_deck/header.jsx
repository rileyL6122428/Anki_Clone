var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  render: function() {
    return(
      <div>
        <Link to="/dashboard">Cancel</Link>
        <h1>New Deck</h1>
      </div>
    );
  }
});

module.exports = Header;
