var React = require('react');
var Footer = require('../shared/dashboard_footer');
var DashboardContent = require('./dashboard_content');

var Dashboard = React.createClass({
  render: function () {
    return(
      <div className="DashBoard">
        <h1>Dashboard</h1>
        <DashboardContent />
        <Footer/>
      </div>
    );
  }
});

module.exports = Dashboard;
