var React = require('react');
var Footer = require('../shared/dashboard_footer');
var DashboardContent = require('./dashboard_content');
var tourSteps = require('./tour_steps');
var Tour = require('../shared/tour');

var Dashboard = React.createClass({

  getInitialState: function() {
    return({ windowCompressed: false })
  },

  componentDidMount: function (){
    var self = this;
    this.intervalId = setInterval(function() {
      if ($(window).width() < 850) {
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
    if(this.state.windowCompressed) { compressionStatus = "Compressed"; }

    return(
      <div className={ "DashBoard " + compressionStatus }>
        <h1>Dashboard</h1>
        <DashboardContent />
        <Footer/>
        <Tour steps={ tourSteps } />
      </div>
    );
  }
});

module.exports = Dashboard;
