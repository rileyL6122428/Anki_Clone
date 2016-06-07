var React = require('react');
var Link = require('react-router').Link;

var DashboardFooter = React.createClass({
  render: function () {
    //TODO replace links with proper routes
    return(
      <div className="Footer">
        <ul>
          <li><Link className="Home-Icon" to="/dashboard">Dashboard</Link></li>
          <li><Link className="Decks-Icon" to="/decks">Decks</Link></li>
          <li><Link className="New-Decks-Icon" to="/new-deck">New Deck</Link></li>
          <li><Link className="Import-Icon" to="/public-deck-index">Import Deck</Link></li>
          <li><Link className="Profile-Icon" to="/profile">Profile</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = DashboardFooter;
