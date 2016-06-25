var React = require('react');

var Test = React.createClass({

  modifiedPercentages: function () {
    var max = 0;
    this.props.barTotals.forEach(function(barTotal){
      if (max < barTotal) { max = barTotal }
    });

    if (max === 0) { return [4, 4, 4, 4, 4, 4, 4]; }

    var percentages = [];
    //NOTE the modified percentage caps at 80 percent
    //     this is a result of the way bars are configues in the graph
    this.props.barTotals.forEach(function(barTotal){
      var percentage = (barTotal / max) * 80;
      (percentage < 4) ? percentages.push(4) : percentages.push(percentage)
    });

    return percentages;
  },

  render: function (){
    var barTotals = this.props.barTotals;
    var barLabels = this.props.barLabels;
    var percentages = this.modifiedPercentages();

    return(
      <div className="Test-Graph">

          <div className="Bars group">

            <div className="Bar-Unit">
              <div className="Bar Bar1"
                 style={{height: percentages[0] + "%"} }>
              </div>
              <wrapper style={{height: (100 - percentages[0]) + "%"}}>
                <num>{ barTotals[0] }</num>
              </wrapper>
            </div>

            <div className="Bar-Unit">
              <div className="Bar Bar2"
                 style={{height: percentages[1] + "%"} }>
              </div>
              <wrapper style={{height: (100 - percentages[1]) + "%"}}>
                <num>{ barTotals[1] }</num>
                </wrapper>
            </div>

            <div className="Bar-Unit">
              <div className="Bar Bar3"
                 style={{height: percentages[2] + "%"} }>
              </div>
              <wrapper style={{height: (100 - percentages[2]) + "%"}}>
                <num>{ barTotals[2] }</num>
                </wrapper>
            </div>

            <div className="Bar-Unit">
              <div className="Bar Bar4"
                 style={{height: percentages[3] + "%"} }>
              </div>
              <wrapper style={{height: (100 - percentages[3]) + "%"}}>
                <num>{ barTotals[3] }</num>
                </wrapper>
            </div>

            <div className="Bar-Unit">
              <div className="Bar Bar5"
                 style={{height: percentages[4] + "%"} }>
              </div>
              <wrapper style={{height: (100 - percentages[4]) + "%"}}>
                <num>{ barTotals[4] }</num>
                </wrapper>
            </div>

            <div className="Bar-Unit">
              <div className="Bar Bar6"
                 style={{height: percentages[5] + "%"} }>
              </div>
              <wrapper style={{height: (100 - percentages[5]) + "%"}}>
                <num>{ barTotals[5] }</num>
                </wrapper>
            </div>

            <div className="Bar-Unit">
              <div className="Bar Bar7"
                 style={{height: percentages[6] + "%"} }>
              </div>
              <wrapper style={{height: (100 - percentages[6]) + "%"}}>
                <num>{ barTotals[6] }</num>
                </wrapper>
            </div>
          </div>

          <div className="Labels group">
            <div className="Label1">{ barLabels[0] }</div>
            <div className="Label2">{ barLabels[1] }</div>
            <div className="Label3">{ barLabels[2] }</div>
            <div className="Label4">{ barLabels[3] }</div>
            <div className="Label5">{ barLabels[4] }</div>
            <div className="Label6">{ barLabels[5] }</div>
            <div className="Label7">{ barLabels[6] }</div>
          </div>

    </div>
    );
  }
});

module.exports = Test;
