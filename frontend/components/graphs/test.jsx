var React = require('react');

var Test = React.createClass({
  render: function (){
    var percentages = this.props.modifiedPercentages;
    var barTotals = this.props.barTotals;
    var barLabels = this.props.barLabels;
    return(
      <div className="Test-Graph">

          <div className="Bars group">

            <div>
              <p className="Bar"
                 style={{height: percentages[0] + "%"} }>
              </p>
              <wrapper style={{height: (100 - percentages[0]) + "%"}}>
                <num>{ barTotals[0] }</num>
              </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: percentages[1] + "%"} }>
              </p>
              <wrapper style={{height: (100 - percentages[1]) + "%"}}>
                <num>{ barTotals[1] }</num>
                </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: percentages[2] + "%"} }>
              </p>
              <wrapper style={{height: (100 - percentages[2]) + "%"}}>
                <num>{ barTotals[2] }</num>
                </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: percentages[3] + "%"} }>
              </p>
              <wrapper style={{height: (100 - percentages[3]) + "%"}}>
                <num>{ barTotals[3] }</num>
                </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: percentages[4] + "%"} }>
              </p>
              <wrapper style={{height: (100 - percentages[4]) + "%"}}>
                <num>{ barTotals[4] }</num>
                </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: percentages[5] + "%"} }>
              </p>
              <wrapper style={{height: (100 - percentages[5]) + "%"}}>
                <num>{ barTotals[5] }</num>
                </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: percentages[6] + "%"} }>
              </p>
              <wrapper style={{height: (100 - percentages[6]) + "%"}}>
                <num>{ barTotals[6] }</num>
                </wrapper>
            </div>
          </div>

          <div className="Labels group">
            <div>{ barLabels[0] }</div>
            <div>{ barLabels[1] }</div>
            <div>{ barLabels[2] }</div>
            <div>{ barLabels[3] }</div>
            <div>{ barLabels[4] }</div>
            <div>{ barLabels[5] }</div>
            <div>{ barLabels[6] }</div>
          </div>

    </div>
    );
  }
});

module.exports = Test;
