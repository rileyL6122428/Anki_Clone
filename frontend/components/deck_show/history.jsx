var React = require('react');

var History = React.createClass ({
  render: function () {
    console.log(this.props.compressStatus);
    return(
      <div className={"DeckHistory " + this.props.compressStatus}>
        <h4 className="Stat-Header">History</h4>
        <ul className="Stat-List">

        <li className="Statistic">
         <p className="StatTitle">Reviews Today</p>
         <p className="Stat">{ this.props.reviewsToday }</p>
         <div className="ClearSet" />
        </li>

        <li className="Statistic">
          <p className="StatTitle">Reviews per Day (average)</p>
          <p className="Stat">{ this.props.reviewsPerDay }</p>
          <div className="ClearSet" />
        </li>

        <li className="Statistic">
          <p className="StatTitle">Total number of Review</p>
          <p className="Stat">{ this.props.reviewTotal }</p>
          <div className="ClearSet" />
        </li>
        </ul>

      </div>
    );
  }
});

module.exports = History;
