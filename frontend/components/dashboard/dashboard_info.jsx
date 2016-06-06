var React = require('react');

var DashboardInfo = React.createClass({

  calcReviewsPerDay: function () {
    var total = 0;
    this.props.dayTotals.forEach(function(dayTotal){
      total += dayTotal;
    });
    return (total / 7);
  },

  calcReviewsToday: function () {
    var rightNow = new Date();
    return this.props.dayTotals[rightNow.getDay()];
  },

  render: function(){

    var reviewsPerDay = this.calcReviewsPerDay();
    var reviewsToday = this.calcReviewsToday();
    return(
      <div className="Info">
        <h4>INFO</h4>
        <ul>
          <li>
            <p className="StatTitle">Reviews Today</p>
            <p className="Stat">{ reviewsToday }</p>
            <div className="ClearSet" />
          </li>

          <li>
            <p className="StatTitle">Reviews per Day (Average)</p>
            <p className="Stat">{ reviewsPerDay }</p>
            <div className="ClearSet" />
          </li>

          <li>
            <p className="StatTitle">Total Number of Reviews</p>
            <p className="Stat">{ this.props.lifeTotal }</p>
            <div className="ClearSet" />
          </li>

        </ul>
      </div>
    );
  }
});

module.exports = DashboardInfo;
