var React = require('react');
var Footer = require('../shared/dashboard_footer');

var Dashboard = React.createClass({
  render: function () {
    return(
      <div>
        <h1>Dashboard</h1>
        <Footer/>
      </div>
    );
  }
});

module.exports = Dashboard;
