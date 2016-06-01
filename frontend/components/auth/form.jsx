var React = require('react');

var AForm = React.createClass({

  getInitialState: function () {
    return({
       formType: "Sign up",
       username: "",
       password: "",
       passwordConfirm: "",
     });
  },

  _usernameChange: function (e) {
    var newUsername = e.target.value
    this.setState({ username: newUsername })
  },

  _passwordChange: function (e) {
    var newPassword = e.target.value
    this.setState({ password: newPassword })
  },

  _confirmPasswordChange: function (e) {
    var newPasswordConfirm = e.target.value
    this.setState({ passwordConfirm: newPasswordConfirm })
  },



  _loginCB: function(e) {
    e.preventDefault();
    UserActions.login({
      username: this.state.username,
      password: this.state.password
    });

  },

  _signUpCB: function (e) {
    e.preventDefault();
    UserActions.signup({
      username: this.state.username,
      password: this.state.password
    });
  },

  render: function () {
    if(!this.props.showing) { return<div></div>; }
    var submitText = this.props.formType;
    var submitCB = (submitText === "Log in") ? this._loginCB : this._signUpCB;
    var confirmPasswordInput = <div></div>;

    if(submitText === "Sign up"){
      confirmPasswordInput = (
        <div>
          <label>Confirm:
            <input type="text" onChange={this._confirmPasswordChange}/>
          </label>
          <br/>
        </div>
      );
    }

    return(
      <div>
        <form onSubmit={submitCB}>
          <label>Username:
            <input type="text" onChange={this._usernameChange}/>
          </label>
          <br/><br/>
          <label>Password:
            <input type="text" onChange={this._passwordChange}/>
          </label>
          <br/><br/>
          {confirmPasswordInput}
          <button id="cancel" onClick={this.props.cancelCB}>Cancel</button>
          <input disabled={this.state.password !== this.state.passwordConfirm}
                 type="submit"
                 id="submit"
                 value={submitText}/>
        </form>
      </div>
    );
  }
});

module.exports = AForm;
