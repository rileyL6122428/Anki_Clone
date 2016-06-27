var React = require('react');
var SearchBar = require('./flashcards_search_bar');
var List = require('./list');
var Link = require('react-router').Link;

var FlashcardIndex = React.createClass({
  getInitialState: function () {
    return({ query: "" });
  },

  queryChangeCB: function (e) {
    e.preventDefault();

    this.setState({ query: e.target.value })
  },

  render: function(){
    var arrow = "<"
    return(
      <div className="Parent-Component Flashcard-Index">
        <h1>
          <Link to={ "/decks/" + this.props.params.id } className="Header-Link Back">{ arrow }</Link>
          Cards
          <Link to={ "/decks/" + this.props.params.id + "/new-flashcards"} className="Header-Link New">New</Link>
          <div className="ClearSet" />
        </h1>
        <SearchBar queryChangeCB={ this.queryChangeCB }/>
        <div className="Overflow-Test">
          <List deckId={this.props.params.id } query={ this.state.query }/>
        </div>

      </div>
    );
  }
});

module.exports = FlashcardIndex;
