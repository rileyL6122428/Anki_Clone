var React = require('react');
var DeckActions = require('../../actions/deck_actions');
var DeckStore = require('../../stores/deck_store');

var Form = React.createClass({

  getInitialState: function () {
    return({ name: "", description: "" });
  },

  // componentDidMount: function () {
  //   this.listenerToken = DeckStore.addListener(deckStoreCB);
  // },
  //
  // componentWillUnmount: function () {
  //
  // },

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
    DeckActions.createDeck({
        name: this.state.name,
        description: this.state.description
      });

    //TODO redirect to deck show with callback in Deck store
  },

  render: function () {
    return(
      <div>
        <form onSubmit={this.submitCB}>
          <label>Name
            <input type="text" onChange={this.changeName} />
          </label>
          <br/>

          <label>Description
            <input type="text" onChange={this.changeDescription} />
          </label>
          <br/>

          <input type="submit" value="Save" />

        </form>

      </div>
    )
  }
});

module.exports = Form;
