var React = require('react');
var Link = require('react-router').Link;

var DashboardFooter = React.createClass({
  render: function () {
    //TODO replace links with proper routes
    return(
      <div className="Footer">
        <ul>
          <Link to="/dashboard"><li className="Home-Icon Icon"></li></Link>
          <Link to="/decks"><li className="Decks-Icon Icon"></li></Link>
          <Link to="/new-deck"><li className="New-Decks-Icon Icon"></li></Link>
          <Link to="/public-deck-index"><li className="Import-Icon Icon"></li></Link>
          <Link to="/profile"><li className="Profile-Icon Icon"></li></Link>
        </ul>
      </div>
    );
  }
});

module.exports = DashboardFooter;
