var React = require('react')
var UserStore = require('../../stores/user_store');

var ErrorMessage = React.createClass({



  render: function () {
    if(!this.props.hitAnError) { return<div></div>; }

    var errorCategory, errorExplanation, errorAdvice;

    if(this.props.formType === "Log in") {
      errorCategory = "Authentication failed."
      errorExplanation = "Check your username and password, then try again."
      errorAdvice = "If this is your first time using AnkiClone, choose 'Sign Up' and create an account with a valid username";
    } else {
      errorCategory = "Sign up failed."
      errorExplanation = UserStore.errors()[0];
      errorAdvice = ""
    }

    return (
      <div className="auth_error">
        <h3>Attention</h3>
        <br/>
        <p>{errorCategory}</p>
        <p>{errorExplanation}</p>
        <br/>
        <p>{errorAdvice}</p>
        <button onClick={this.props.acknowledgeErrorCB}>OK</button>
      </div>
    );
  }
});

module.exports = ErrorMessage;
