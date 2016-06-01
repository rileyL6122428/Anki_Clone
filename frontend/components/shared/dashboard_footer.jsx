var React = require('react');
var Link = require('react-router').Link;

var DashboardFooter = React.createClass({
  render: function () {
    //TODO replace links with proper routes
    return(
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard">Decks</Link>
        <Link to="/dashboard">New Deck</Link>
        <Link to="/dashboard">Import Deck</Link>
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
});

module.exports = DashboardFooter;
