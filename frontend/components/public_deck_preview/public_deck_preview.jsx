var React = require('react');
var PublicDeckStore = require('../../stores/public_deck_store');
var PublicDeckActions = require('../../actions/public_deck_actions')
var HeaderWithBack = require('../shared/header_with_back_arrow');
var PreviewList = require('./preview_list');
var PreviewInfo = require('./preview_info');

var PublicDeckPreview = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    var deck = PublicDeckStore.find(this.props.params.id);
    deck = deck ? deck : {cardPreview: [], name: "", description: ""}
    return({ deck: deck })
  },

  componentDidMount: function () {
    this.listenerToken = PublicDeckStore.addListener(this.storeCB);
    PublicDeckActions.fetch(this.props.params.id);
  },

  storeCB: function () {
    var deckId = parseInt(this.props.params.id)
    this.setState({ deck: PublicDeckStore.find(deckId) })
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  downloadDeckCB: function (e) {
    e.preventDefault();
    PublicDeckActions.downloadDeck(this.props.params.id, this.reRouteCB);
  },

  reRouteCB: function (id) {
    this.context.router.push('decks/' + id );
  },

  render: function () {
    return(
      <div className="Parent-Component Download-Deck">
        <HeaderWithBack title="Download Deck" url="/public-deck-index"/>
        <PreviewList deck={ this.state.deck }/>
        <PreviewInfo deck={ this.state.deck }/>
        <button className="Normal-Button"
                onClick={ this.downloadDeckCB }>Download</button>
      </div>
    )
  }
});

module.exports = PublicDeckPreview;
