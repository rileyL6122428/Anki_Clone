var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);

var _currentUser, _errors, _lastUser;


UserStore.login = function(user){
	_currentUser = user;
  _errors = null;
};

UserStore.currentUserSameAsLast = function () {
  if(_lastUser) { return _currentUser.username === _lastUser.username; }
}

UserStore.logout = function() {
  _lastUser = _currentUser;
  _currentUser = null;
  _errors = null;
};

UserStore.lastUser = function() {
  if(_lastUser) { return $.extend({}, _lastUser); }
}

UserStore.currentUser = function(){
  if (_currentUser) { return $.extend({}, _currentUser); }
};

UserStore.configureCurrentUser = function () {
  _lastUser = _currentUser;
}

UserStore.setErrors = function(errors){
  _errors = errors;
};

UserStore.errors = function(){
  if (_errors) { return [].slice.call(_errors); }
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "LOGIN":
		case "LOGIN_GUEST":
    UserStore.login(payload.user);
    break;
    case "LOGOUT":
    UserStore.logout();
    break;
    case "ERROR":
    UserStore.setErrors(payload.errors);
    break;
  }
  UserStore.__emitChange();
};

module.exports = UserStore;
