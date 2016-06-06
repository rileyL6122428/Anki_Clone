var React = require('react');
var RecapCanvas = require('../graphs/recap');

var Recap =  React.createClass({
  render: function () {
    if (!this.props.showing) { return <div></div>; }
      // debugger
    return (
      <div className="group Recap">
        <div className="Review-Grade" >
          <h4 className="Stat-Header">Grade</h4>
          <RecapCanvas percentage={ this.props.reviewGrade }/>
        </div>

        <div className="Review-Info">
          <h4 className="Stat-Header">Info</h4>
          <ul className="Stat-List">

            <li className="Statistic">
              <p className="StatTitle">Reviews per Day (average)</p>
              <p className="Stat">{ this.props.deck.reviewsPerDay }</p>
              <div className="ClearSet" />
            </li>

            <li className="Statistic">
               <p className="StatTitle">Reviews Today</p>
               <p className="Stat">{ this.props.deck.reviewsToday }</p>
               <div className="ClearSet" />
            </li>
          </ul>

        </div>

        <button className="Normal-Button" onClick={this.props.continueCB}>Continue</button>
      </div>
    );
  }
});

module.exports = Recap;
