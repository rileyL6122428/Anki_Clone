var React = require('react');
var Footer = require('../shared/dashboard_footer');
var UserActions = require('../../actions/user_actions');
var UserStore = require('../../stores/user_store');
var ProfilePage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  logoutCB: function (e) {
    e.preventDefault();
    UserActions.logout();
    this.context.router.push('auth');
  },

  render: function () {
    return (
      <div>
        <h1>Profile</h1>
        <p className="list_left">Username</p>
        <p className="list_right">{UserStore.currentUser().username}</p>
        <button onClick={this.logoutCB}>Log Out</button>
        <Footer/>
      </div>
    );
  }
});

module.exports = ProfilePage;
