var React = require('react');
var DashboardInfo = require('./dashboard_info');
var DashboardDisplay = require('./dashboard_display');

var DashboardContent = React.createClass({

  render: function () {
    return(
      <div>
      <DashboardInfo />
      <DashboardDisplay />
      </div>
    );
  }
});

module.exports = DashboardContent;
