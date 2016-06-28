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
var ProfilePage = require('./components/profile/profile_page');
var UserDecks = require('./components/user_decks/user_decks');
var NewDeck = require('./components/new_deck/new_deck');
var DeckShow = require('./components/deck_show/deck_show');
var EditDeck = require('./components/edit_deck/edit_deck');
var FlashcardIndex = require('./components/flashcard_index/flashcard_index.jsx');
var FlashcardShow = require('./components/flashcard_show/flashcard_show');
var NewFlashcard = require('./components/new_card/new_card');
var EditFlashcard = require('./components/edit_flashcard/edit_flashcard');
var Review = require('./components/review/review');
var PublicDeckBrowser = require('./components/public_deck_browser/public_deck_browser');
var PublicDeckPreview = require('./components/public_deck_preview/public_deck_preview');


//TODO move this and other auth related stuff somewhere else, if possible
var UserStore = require('./stores/user_store');
var UserActions = require('./actions/user_actions')

var App = React.createClass({
  render: function (){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

var dummyIndex = React.createClass({
  render: function (){
    return<div></div>
  }
})

//TODO route a onEnter callback for the auth route that takes the user to
// to the dashboard if they have already logged in

var Router = (
  <Router history={hashHistory} >
    <Route path='/' component={App} >
      <IndexRoute  onEnter={directUser}/>
      <Route path='auth' component={AuthForm} onEnter={_checkLogInStatus}/>
      <Route path='dashboard' component={Dashboard} onEnter={_ensureLoggedIn} />
      <Route path='profile' component={ProfilePage} onEnter={_ensureLoggedIn} />
      <Route path='decks' component={UserDecks} onEnter={_ensureLoggedIn} />
      <Route path='new-deck' component={NewDeck} onEnter={_ensureLoggedIn} />
      <Route path='decks/:id' component={DeckShow} onEnter={_ensureLoggedIn} />
      <Route path='edit-deck/:id' component={EditDeck} onEnter={_ensureLoggedIn} />
      <Route path='decks/:id/flashcards' component={FlashcardIndex} onEnter={_ensureLoggedIn} />
      <Route path='decks/:id/flashcards/:cardId' component={FlashcardShow} onEnter={_ensureLoggedIn} />
      <Route path='decks/:id/new-flashcards' component={NewFlashcard} onEnter={_ensureLoggedIn} />
      <Route path='decks/:id/flashcards/:cardId/edit' component={EditFlashcard} onEnter={_ensureLoggedIn} />
      <Route path='decks/:id/review' component={Review} onEnter={_ensureLoggedIn} />
      <Route path='public-deck-index' component={PublicDeckBrowser} onEnter={_ensureLoggedIn} />
      <Route path='public-decks/:id' component={PublicDeckPreview} onEnter={_ensureLoggedIn} />
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
  UserActions.fetchCurrentUser();
  var token = UserStore.addListener(function(){

    if( !UserStore.currentUser() ) { replace('/auth'); }
    token.remove();
    asyncDoneCallback();
  });
}

function _checkLogInStatus(nextState, replace, asyncDoneCallback) {
  UserActions.fetchCurrentUser();
  var token = UserStore.addListener(function(){

    if(UserStore.currentUser()) { replace('/dashboard'); }
    token.remove();
    asyncDoneCallback();
  });
}

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
