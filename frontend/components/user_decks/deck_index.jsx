var React = require('react');
var DeckStore = require('../../stores/deck_store');
var DeckActions = require('../../actions/deck_actions');
var DeckIndexItem = require('./deck_index_item');

var DeckIndex = React.createClass({

  getInitialState: function () {
    return({ decks: DeckStore.all() })
  },

  componentDidMount: function () {
    this.listenerToken = DeckStore.addListener(this.deckStoreCB);
    DeckActions.fetchDecks();
  },

  deckStoreCB: function () {
    this.setState({ decks: DeckStore.all() });
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  render: function () {

    var deckList = (
      <div className="Wrapper">
        {
          this.state.decks.map(function(deck){
            return(
              <DeckIndexItem key={deck.id}
                             id={deck.id}
                             name={deck.name}
                             totalCards={"insertTotalCards"}
                             grade={"insertGrade"} />
            );
          })
        }
      </div>
    );

    return(
      <div>
        <ul>
          {deckList}
        </ul>
      </div>

    );
  }
});

module.exports = DeckIndex;
