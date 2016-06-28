var React = require('react');
var UserActions = require('../../actions/user_actions');

var AForm = React.createClass({

  getInitialState: function () {
    return({
       formType: "Sign up",
       username: "",
       password: "",
       passwordConfirm: "",
       usernameSelected: false,
       passwordSelected: false,
       confirmSelected: false
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


  usernameFocusCB: function () {
    this.setState({ usernameSelected: true});
  },

  usernameBlurCB: function () {
    this.setState({ usernameSelected: false });
  },

  passwordFocusCB: function () {
    this.setState({ passwordSelected: true })
  },

  passwordBlurCB: function () {
    this.setState({ passwordSelected: false })
  },

  confirmFocusCB: function () {
    this.setState({ confirmSelected: true })
  },

  confirmBlurCB: function () {
    this.setState({ confirmSelected: false })
  },

  render: function () {
    if(!this.props.showing) { return<div></div>; }

    var submitText = this.props.formType;
    var submitCB = (submitText === "Log in") ? this._loginCB : this._signUpCB;
    var confirmPasswordInput = <div></div>;

    var usernameInputClass = "Username-Icon";
    if (this.state.usernameSelected) { usernameInputClass = "Username-Icon-Blue"}

    var passwordInputClass = "Password-Icon-1";
    if (this.state.passwordSelected) { passwordInputClass = "Password-Icon-1-Blue"}

    var confirmInputClass = "Password-Icon-2"
    if (this.state.confirmSelected) { confirmInputClass = "Password-Icon-2-Blue"}
    if(submitText === "Sign up"){
      confirmPasswordInput = (
        <div>
          <label>
            <input type="password"
                   placeholder="Confirm Password"
                   className="Third-Auth-Input"
                   onChange={this._confirmPasswordChange}
                   onFocus={ this.confirmFocusCB }
                   onBlur={ this.confirmBlurCB }/>
                 <div className={ confirmInputClass }></div>
          </label>
        </div>
      );
    }

    return(
      <div>
        <form onSubmit={submitCB}>
          <label>
            <input type="text"　
                   placeholder="Username"
                   onChange={this._usernameChange}
                   className="First-Auth-Input"
                   onFocus={this.usernameFocusCB}
                   onBlur={this.usernameBlurCB}/>
                 <div className={usernameInputClass}></div>
          </label>
          <label>
            <input type="password"
                   placeholder="Password"
                   onChange={this._passwordChange}
                   className="Second-Auth-Input"
                   onFocus={this.passwordFocusCB}
                   onBlur={this.passwordBlurCB}/>
           <div className={passwordInputClass}></div>
          </label>
          {confirmPasswordInput}
          <button id="cancel" onClick={this.props.cancelCB}>Cancel</button>
          <input disabled={this.state.password !== this.state.passwordConfirm && this.props.formType === "Sign up"}
                 type="submit"
                 id="submit"
                 value={submitText}/>
        </form>
      </div>
    );
  }
});

module.exports = AForm;
