var React = require('react');

var DashboardInfo = React.createClass({
  render: function(){
    return(
      <div>
        <h4>INFO</h4>
        <ul>
          <li>
            <p>Reviews Today</p>
            <p>Insert Reviews Done Today</p>
          </li>

          <li>
            <p>Reviews per Day (Average)</p>
            <p>Insert Reviews Per Day</p>
          </li>

          <li>
            <p>Total Number of Reviews</p>
            <p>Insert Total Number of Reviews</p>
          </li>

        </ul>
      </div>
    );
  }
});

module.exports = DashboardInfo;
