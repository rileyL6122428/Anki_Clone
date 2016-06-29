var React = require('react');
var UserStore = require('../../stores/user_store');
var DeckStore = require('../../stores/deck_store');
var DeckActions = require('../../actions/deck_actions');
var DeckIndexItem = require('./deck_index_item');
var LoadingBar = require('../graphs/loading_bar');

var DeckIndex = React.createClass({
  getInitialState: function () {
    return({
      decks: DeckStore.all(),
      minimumLoadTimeFinished: !this.loadNeeded(),
      decksGrabbedFromStore: !this.loadNeeded(),
      empty: false
    })
  },

  componentDidMount: function () {
    this.listenerToken = DeckStore.addListener(this.deckStoreCB);
    DeckActions.fetchDecks();

    var self = this;
    setTimeout(function() {
      self.setState({minimumLoadTimeFinished: true})
    }, 1000);
  },

  deckStoreCB: function () {
    var decks = DeckStore.findByName(this.props.query)
    this.setState({
      decks: decks,
      decksGrabbedFromStore: true,
      empty: (decks.length === 0)
    });
  },

  componentWillReceiveProps: function (props) {
    this.setState({ decks: DeckStore.findByName(props.query) });
  },

  componentWillUnmount: function () { this.listenerToken.remove(); },

  loadNeeded: function () {
    if(UserStore.currentUserSameAsLast()) {
      return false;
    } else {
      UserStore.configureCurrentUser()
      return true;
    }
  },

  deckList: function () {
    if(this.userHasDecks()) {
      return this.generateDeckList();
    } else {
      return this.emptyList();
    }
  },

  emptyList: function () {
    return (
      <div className="Empty-Deck-Index-Statement">
        <p>You currently do not have any decks.</p>
        <p>Press the plus sign below to add a deck.</p>
      </div>
    );
  },

  generateDeckList: function () {
    return (
      <div className="Wrapper">
        {
          this.state.decks.map(function(deck){
            return(
              <DeckIndexItem key={deck.id} id={deck.id} urlFront={"decks/"}
                             name={deck.name} totalCards={deck.cardTotal}
                             grade={deck.grade} />
            );
          })
        }
      </div>
    )
  },

  userHasDecks: function () {
    return !this.state.empty;
  },

  readyToShowList: function () {
    return this.state.minimumLoadTimeFinished &&
    this.state.decksGrabbedFromStore;
  },

  render: function () {
    var deckList = this.generateDeckList();

    if(this.readyToShowList()) {
      return this.deckList();
    } else {
      return<div className="Loading-Bar"><LoadingBar/></div>;
    }
  }
});

module.exports = DeckIndex;
