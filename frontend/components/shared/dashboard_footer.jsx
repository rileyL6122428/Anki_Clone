var React = require('react');
var Link = require('react-router').Link;

var DashboardFooter = React.createClass({
  render: function () {
    //TODO replace links with proper routes
    return(
      <div className="Footer">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/decks">Decks</Link></li>
          <li><Link to="/new-deck">New Deck</Link></li>
          <li><Link to="/public-deck-index">Import Deck</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = DashboardFooter;
