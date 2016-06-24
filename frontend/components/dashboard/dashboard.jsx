var React = require('react');
var Footer = require('../shared/dashboard_footer');
var DashboardContent = require('./dashboard_content');

var Dashboard = React.createClass({

  getInitialState: function() {
    return({ windowCompressed: false })
  },

  componentDidMount: function (){

    var self = this;
    this.intervalId = setInterval(function() {
      if ($(window).width() < 1025) {
       self.setState({ windowCompressed: true });
     } else {
       self.setState({ windowCompressed: false });
     }
   }, 700);
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
      </div>
    );
  }
});

module.exports = Dashboard;
