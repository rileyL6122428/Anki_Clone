var React = require('react');

var Greeting = React.createClass({
  render: function () {

    if(!this.props.showing) { return<div className="group"></div>; }

    return (
      <div>
      <h3>Welcome!</h3>
      <p>If this is your first time using AnkiClone, choose 'Sign Up'
        and create an account. It is free!</p><br/>
      <button onClick={this.props.toSignUpCB}>Sign up</button><br/>
      <button onClick={this.props.toLogInCB}>Log in</button><br/>
        <a href="/users/auth/facebook">
          <div className="Facebook-Signup" >Sign in with Facebook /</div>
        </a>
        <button onClick={this.props.guestLoginCB}
                className="Guest-Button"> as Guest</button>
      </div>
    );
  }
});

module.exports = Greeting;
