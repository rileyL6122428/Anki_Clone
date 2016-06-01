var React = require('react');
var Link = require('react-router').Link;

var DashboardFooter = React.createClass({
  render: function () {
    return(
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
});

module.exports = DashboardFooter;
