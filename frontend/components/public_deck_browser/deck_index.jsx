var React = require('react');
var PublicDeckStore = require('../../stores/public_deck_store');
var DeckActions = require('../../actions/public_deck_actions');
var DeckIndexItem = require('../user_decks/deck_index_item');

var DeckIndex = React.createClass({

  getInitialState: function () {
    return({ decks: [] })
  },

  componentDidMount: function () {
    this.listenerToken = PublicDeckStore.addListener(this.deckStoreCB);
  },

  deckStoreCB: function () {
    this.setState({ decks: PublicDeckStore.all() });
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
                             urlFront={"public-decks/"}
                             name={deck.name}
                             totalCards={deck.cardTotal}
                             import={true}/>
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
