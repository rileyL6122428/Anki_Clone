var React = require('react');
var GradeGraph = require('../graphs/test');

var Info = React.createClass ({
  render: function () {
    return(
      <div className="DeckInfo">
        <h3>Info</h3>
        <div>
          <p>{ this.props.cardTotal }</p>
          <div>Card Total</div>
        </div>

        <div>
          <div>{ this.props.grade }%</div>
          <p>Grade</p>
        </div>

        <GradeGraph barTotals={ this.props.gradeDistribution }
                    barLabels={[
                      "New",
                      "F",
                      "E",
                      "D",
                      "C",
                      "B",
                      "A"
                    ]} />
      </div>
    );
  }
})

module.exports = Info;
