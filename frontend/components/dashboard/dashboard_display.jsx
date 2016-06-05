var React = require('react');
var TestGraph = require('../graphs/test');
//TODO add a review store that gets data on store stuff

var DashboardDisplay = React.createClass({



  render: function () {
    return (
      <div className="Display">
      <h4>REVIEWS</h4>
      <TestGraph
          sunTotal={2} sunModPercentage = {16}
          monTotal={5} monModPercentage = {40}
          tueTotal={7} tueModPercentage = {56}
          wedTotal={4} wedModPercentage = {32}
          thuTotal={2} thuModPercentage = {16}
          friTotal={10} friModPercentage = {80}
          satTotal={3} satModPercentage = {24} />
      </div>

    );
  }

});

module.exports = DashboardDisplay;
