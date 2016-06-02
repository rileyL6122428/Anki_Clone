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
      <div className="Profile Parent-Component">
        <h1>Profile</h1>

        <h4>Account</h4>
        <ul>
          <li>
            <p className="StatTitle">Username</p>
            <p className="Stat">{UserStore.currentUser().username}</p>
            <div className="ClearSet" />
          </li>
        </ul>


        <button onClick={this.logoutCB} className="Cancel-Logout-Button">Log Out</button>
        <Footer/>
      </div>
    );
  }
});

module.exports = ProfilePage;
