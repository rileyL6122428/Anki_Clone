//VAR DEC
//REACT
var React = require('react');
var ReactDOM = require('react-dom');
// ROUTER
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
//COMPONENTS
var AuthForm = require('./components/auth/auth_form');
var Dashboard = require('./components/dashboard/dashboard');

var UserStore = require('./stores/user_store');

//TESTING ONLY
UserStore = require('./stores/user_store');
UserActions = require('./actions/user_actions');

var App = React.createClass({
  render: function (){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory} >
    <Route path='/' component={App} >
      <IndexRoute component={AuthForm} onEnter={directUser}/>
      <Route path='auth' component={AuthForm} />
      <Route path='dashboard' component={Dashboard} onEnter={_ensureLoggedIn} />
    </Route>
  </Router>
)

function directUser(nextState, replace, asyncDoneCallback) {
  if(UserStore.currentUser()) {
    replace('/dashboard');
  } else {
    replace('/auth');
  }
  asyncDoneCallback();
}

function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {
  if( !UserStore.currentUser() ) { replace('/auth'); }
  asyncDoneCallback();
}

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
