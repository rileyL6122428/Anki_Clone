var React = require('react');
var UserActions = require('../../actions/user_actions');
var UserStore = require('../../stores/user_store');

//TODO NEXT UP: actually log in

var AuthForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return({
       currentPage: "greeting",
       formType: "Sign up",
       username: "",
       password: "",
       passwordConfirm: ""
     })
  },

  componentDidMount: function () {
    debugger
    this.token = UserStore.addListener(this.redirectLoggedInUser)
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  redirectLoggedInUser: function () {
    debugger
    if(UserStore.currentUser) { this.context.router.push("/dashboard"); }
  },

  greeting: function () {
    if(this.state.currentPage !== "greeting"){
      return;
    }

    return (
      <div>
        <h3>Welcome Statement</h3>
        <button onClick={this.toSignUp}>Sign up</button><br/>
        <button onClick={this.toLogIn}>Log in</button><br/>
      </div>
    );
  },

  toSignUp: function (e) {
    e.preventDefault();
    this.setState({currentPage: "form", formType: "Sign up"});
  },

  toLogIn: function (e) {
    e.preventDefault();
    this.setState({currentPage: "form", formType: "Log in" });
  },

  form: function () {
    if(this.state.currentPage !== "form") { return; }

    var submitText = this.state.formType;
    var submitCB = (submitText === "Log in") ? this._loginCB : this._signUpCB;

    var extraPasswordInput = (
      <div>
        <label>Confirm Password:
          <input type="text" onChange={this._confirmPasswordChange}/>
        </label>
        <br/>
      </div>
    );

    if(submitText === "Log in") { extraPasswordInput = <div></div>; }

    return(
      <div>
        <form onSubmit={submitCB}>
          <label>Username:
            <input type="text" onChange={this._usernameChange}/>
          </label>
          <br/>
          <label>Password:
            <input type="text" onChange={this._passwordChange}/>
          </label>
          <br/>
          {extraPasswordInput}
          <button onClick={this._cancelCB}>Cancel</button>
          <input type="submit" value={submitText}/>
        </form>
      </div>
    );
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

  _cancelCB: function(e){
    e.preventDefault();
    this.setState({currentPage: "greeting"});
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
    return(
      <div>
        <h1>Anki_Clone</h1>
        {this.greeting()}
        {this.form()}
      </div>
    );
  }
});

module.exports = AuthForm;
