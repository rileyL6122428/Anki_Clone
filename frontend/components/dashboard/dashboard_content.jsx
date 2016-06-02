var React = require('react');
var DashboardInfo = require('./dashboard_info');
var DashboardDisplay = require('./dashboard_display');

var DashboardContent = React.createClass({

  render: function () {
    return(
      <div className="Content">
      <DashboardInfo />
      <DashboardDisplay />
      <div className="ClearSet" />
      </div>
    );
  }
});

module.exports = DashboardContent;
