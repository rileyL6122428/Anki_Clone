var React = require('react');
var SearchBar = require('./flashcards_search_bar');
var List = require('./list');
var Link = require('react-router').Link;

var FlashcardIndex = React.createClass({


  render: function(){
    var arrow = "<"
    return(
      <div className="Parent-Component Flashcard-Index">
        <h1>
          <Link to={ "/decks/" + this.props.params.id } className="Header-Link">{ arrow }</Link>
          <p>Cards</p>
          <Link to={ "/decks/" + this.props.params.id + "/new-flashcards"} className="Header-Link">New</Link>
          <div className="ClearSet" />
        </h1>
        <SearchBar />
        <div className="Overflow-Test">
          <List deckId={this.props.params.id}/>
        </div>

      </div>
    );
  }
});

module.exports = FlashcardIndex;
