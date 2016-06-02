var React = require('react');

var DashboardInfo = React.createClass({
  render: function(){
    return(
      <div className="Info">
        <h4>INFO</h4>
        <ul>
          <li>
            <p className="StatTitle">Reviews Today</p>
            <p className="Stat">Insert Reviews Done Today</p>
            <div className="ClearSet" />
          </li>

          <li>
            <p className="StatTitle">Reviews per Day (Average)</p>
            <p className="Stat">Insert Reviews Per Day</p>
            <div className="ClearSet" />
          </li>

          <li>
            <p className="StatTitle">Total Number of Reviews</p>
            <p className="Stat">Insert Total Number of Reviews</p>
            <div className="ClearSet" />
          </li>

        </ul>
      </div>
    );
  }
});

module.exports = DashboardInfo;
