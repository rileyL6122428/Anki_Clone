var React = require('react');
var TestGraph = require('../graphs/test');
//TODO add a review store that gets data on store stuff

var DashboardDisplay = React.createClass({

  calculateModifiedPercentages: function () {
    var max = 0;
    this.props.dayTotals.forEach(function(dayTotal){
      if (max < dayTotal) { max = dayTotal }
    });

    if (max === 0) { return [4, 4, 4, 4, 4, 4, 4]; }

    var percentages = [];
    //NOTE the modified percentage caps at 80 percent
    //     this is a result of the way bars are configues in the graph
    this.props.dayTotals.forEach(function(dayTotal){
      var percentage = (dayTotal / max) * 80;
      (percentage < 4) ? percentages.push(4) : percentages.push(percentage)
    });

    return percentages;
  },

  render: function () {
    return (
      <div className="Display">
      <h4>REVIEWS</h4>
      <TestGraph
          modifiedPercentages={this.calculateModifiedPercentages()}
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
