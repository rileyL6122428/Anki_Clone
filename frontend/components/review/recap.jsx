var React = require('react');

var Recap =  React.createClass({
  render: function () {
    if (!this.props.showing) { return <div></div>; }

    return (
      <div>
        <div className="Review-Grade" >
          <div>Insert Grade Graph Here</div>
        </div>

        <div className="Review-Info">
          <h4 className="Stat-Header">Info</h4>
          <ul className="Stat-List">

            <li className="Statistic">
              <p className="StatTitle">Reviews per Day (average)</p>
              <p className="Stat">Insert Total</p>
              <div className="ClearSet" />
            </li>

            <li className="Statistic">
               <p className="StatTitle">Reviews Today</p>
               <p className="Stat">Insert Total</p>
               <div className="ClearSet" />
            </li>
          </ul>
        </div>

        <button onClick={this.props.continueCB}>Continue</button>
      </div>
    );
  }
});

module.exports = Recap;
