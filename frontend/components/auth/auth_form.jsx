var React = require('react');
var UserActions = require('../../actions/user_actions');
var UserStore = require('../../stores/user_store');

//COMPONENT
var ErrorMessage = require('./error_message');
var AForm = require('./form');
var Greeting = require('./greeting.jsx');

var AuthForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return({ currentPage: "greeting", formType: "Sign up", authErrors: false })
  },

  componentDidMount: function () {
    this.token = UserStore.addListener(this._handleChange)
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  _handleChange: function () {

    if(UserStore.currentUser()) { this.context.router.push("/dashboard"); }
    if(UserStore.errors()) {this.setState({authErrors: true})}
  },

  _cancelCB: function(e){
    e.preventDefault();
    this.setState({currentPage: "greeting"});
  },

  toSignUp: function (e) {
    e.preventDefault();
    this.setState({currentPage: "form", formType: "Sign up"});
  },

  toLogIn: function (e) {
    e.preventDefault();
    this.setState({currentPage: "form", formType: "Log in" });
  },

  acknowledgeErrorCB: function (e) {
    e.preventDefault();
    this.setState({ authErrors: false })
  },

  render: function () {
    return(
      <div className="auth">
        <h1 className="group">AnkiClone</h1>
        <Greeting showing={ this.state.currentPage === "greeting" }
                  toSignUpCB={this.toSignUp}
                  toLogInCB={this.toLogIn} />
        <ErrorMessage hitAnError={this.state.authErrors}
                      acknowledgeErrorCB={this.acknowledgeErrorCB}
                      formType={this.state.formType}/>
        <AForm
          showing={ this.state.currentPage === "form" }
          formType={this.state.formType}
          cancelCB={this._cancelCB} />
        <a href="/users/auth/facebook">TEst</a>
      </div>
    );
  }
});

module.exports = AuthForm;
