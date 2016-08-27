var React = require('react')
var UserStore = require('../../stores/user_store');

var ErrorMessage = React.createClass({
  getInitialState: function() {
    if(this.props.formType === "Log in") {
      return ({
        errorCategory: "Authentication failed.",
        errorExplanation: "Check your username and password, then try again.",
        errorAdvice: "If this is your first time using AnkiClone, choose 'Sign Up' and create an account with a valid username"
      });
    } else {
      return ({
        errorCategory: "Sign up failed.",
        errorExplanation: UserStore.errors()[0],
        errorAdvice: ""
      });
    }
  },

  render: function () {
    if(!this.props.hitAnError) { return<div></div>; }

    return (
      <div className="auth_error">
        <h3>Attention</h3>
        <br/>
        <p>{this.state.errorCategory}</p>
        <p>{this.state.errorExplanation}</p>
        <br/>
        <p>{this.state.errorAdvice}</p>
        <button onClick={this.props.acknowledgeErrorCB}>OK</button>
      </div>
    );

  }
});

module.exports = ErrorMessage;
