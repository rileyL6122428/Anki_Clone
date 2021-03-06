var React = require('react');
var GradeGraph = require('../graphs/test');
var GraphUtil = require('../graphs/graph_util');

var Info = React.createClass ({
  render: function () {
    var grade = this.props.grade
    var displayGrade = grade + "% " + GraphUtil.gradeByPercentage(grade)

    return(
      <div className={"DeckInfo"}>
        <h4 className="Stat-Header">Info</h4>
        <div className="Display-Stats group">
          <div className="Card-Total-Display">
            <p className="stat">{ this.props.cardTotal }</p>
            <div className="label">Card Total</div>
          </div>

          <div className="Grade-Display">
            <p className="stat" style={{color: GraphUtil.colorByPercentage(grade)}}>
              { displayGrade }
            </p>
            <div className="label">Mastery</div>
          </div>
        </div>

        <GradeGraph barTotals={ this.props.gradeDistribution }
                    barLabels={["New", "F", "E", "D", "C", "B", "A"]} />
      </div>
    );
  }
})

module.exports = Info;
