var React = require('react');
var DeckActions = require('../../actions/deck_actions');
var DeckStore = require('../../stores/deck_store');

var Form = React.createClass({

  getInitialState: function () {
    var deck = DeckStore.find(this.props.deckId);
    return({ name: deck.name, description: deck.description });
  },

  changeName: function (e) {
    var newName = e.target.value
    this.setState({ name: newName })
  },

  changeDescription: function (e) {
    var newDescription = e.target.value
    this.setState({ description: newDescription })
  },

  submitCB: function (e) {
    e.preventDefault();
    DeckActions.editDeck({
        name: this.state.name,
        description: this.state.description,
        id: this.props.deckId
      });

    //TODO redirect to deck show with callback in Deck store
  },

  render: function () {
    return(
      <div className="Form">
        <h4>Info</h4>
        <form onSubmit={this.submitCB}>
          <label>Name
            <br/>
            <input type="text"
                   onChange={this.changeName}
                   value={this.state.name}
                   className="NameInput" />
          </label>
          <br/>

          <label>Description
            <br/>
            <input type="text"
                   onChange={this.changeDescription}
                   value={this.state.description}
                   className="DescriptionInput" />
          </label>
          <br/>

          <input type="submit" value="Save" className="Save" />

        </form>

      </div>
    )
  }
});

module.exports = Form;
