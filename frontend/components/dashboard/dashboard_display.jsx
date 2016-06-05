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
    var dayTotals = this.props.dayTotals
    var percentages = this.calculateModifiedPercentages();
    return (
      <div className="Display">
      <h4>REVIEWS</h4>
      <TestGraph
          sunTotal={dayTotals[0]} sunModifiedPercentage = {percentages[0]}
          monTotal={dayTotals[1]} monModifiedPercentage = {percentages[1]}
          tueTotal={dayTotals[2]} tueModifiedPercentage = {percentages[2]}
          wedTotal={dayTotals[3]} wedModifiedPercentage = {percentages[3]}
          thuTotal={dayTotals[4]} thuModifiedPercentage = {percentages[4]}
          friTotal={dayTotals[5]} friModifiedPercentage = {percentages[5]}
          satTotal={dayTotals[6]} satModifiedPercentage = {percentages[6]} />
      </div>

    );
  }

});

module.exports = DashboardDisplay;
