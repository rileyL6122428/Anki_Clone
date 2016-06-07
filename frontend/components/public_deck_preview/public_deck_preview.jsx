var React = require('react');
var PublicDeckStore = require('../../stores/public_deck_store');
var PublicDeckActions = require('../../actions/public_deck_actions')
var HeaderWithBack = require('../shared/header_with_back_arrow');
var PreviewList = require('./preview_list');
var PreviewInfo = require('./preview_info');

var PublicDeckPreview = React.createClass({

  getInitialState: function () {
    var deck = PublicDeckStore.find(this.props.deckId);
    deck = deck ? deck : {cardPreview: [], name: "", description: ""}
    return({ deck: deck })
  },

  componentDidMount: function () {
    this.listenerToken = PublicDeckStore.addListener(this.storeCB);
    PublicDeckActions.fetch(this.props.params.id);
  },

  storeCB: function () {
    this.setState({ deck: PublicDeckStore.find(this.props.params.id) })
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  downloadDeckCB: function (e) {
    e.preventDefault();
  },

  render: function () {
    return(
      <div className="Parent-Component Download-Deck">
        <HeaderWithBack title="Download Deck" url="/public-deck-index"/>
        <PreviewList deck={ this.state.deck }/>
        <PreviewInfo deck={ this.state.deck }/>
        <button onClick={ this.downloadDeckCB } />
      </div>
    )
  }
});

module.exports = PublicDeckPreview;
