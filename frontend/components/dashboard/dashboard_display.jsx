var React = require('react');
var TestGraph = require('../graphs/test');
//TODO add a review store that gets data on store stuff

var DashboardDisplay = React.createClass({

  render: function () {
    return (
      <div className="Display">
      <h4>REVIEWS</h4>
      <TestGraph
          barTotals={this.props.dayTotals}
          barLabels={[
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ]} />
      </div>

    );
  }

});

module.exports = DashboardDisplay;
