var React = require('react');
var RecapCanvas = require('../graphs/recap');

var Recap =  React.createClass({
  getInitialState: function() {
    return({ windowCompressed: false })
  },

  componentDidMount: function (){

    var self = this;
    this.intervalId = setInterval(function() {
      if ($(window).width() < 950) {
       self.setState({ windowCompressed: true });
     } else {
       self.setState({ windowCompressed: false });
     }
   }, 200);
  },

  componentWillUnmount: function () {
    var self = this;
    clearInterval(self.intervalId);
  },

  render: function () {
    var compressionStatus = "";
    if (this.state.windowCompressed) { compressionStatus = "Compressed" }
    if (!this.props.showing) { return <div></div>; }
    return (
      <div className={ "group Recap " + compressionStatus }>
        <div className="Review-Grade" >
          <h4 className="Stat-Header">Grade</h4>
          <RecapCanvas className="Recap-Circle" percentage={ this.props.reviewGrade }/>
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
