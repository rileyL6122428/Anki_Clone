var React = require('react');
var DeckActions = require('../../actions/deck_actions');
var DeckStore = require('../../stores/deck_store');


var Form = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return({ name: "", description: "" });
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
    DeckActions.createDeck({
        name: this.state.name,
        description: this.state.description
      });

    //TODO redirect to deck show with callback in Deck store
  },

  render: function () {
    return(
      <div className="Form">
        <h4>Info</h4>
          <form onSubmit={this.submitCB}>
            <div className="Input-Label">
              <br/>
              <input type="text" id="Test"
                     onChange={this.changeName}
                     placeholder="Enter Name Here"
                     className="NameInput" />
                   <label className="Test-Label Label1" for="Test">Name</label>
            </div>
            <br/>

            <div className="Input-Label">
              <br/>
              <input type="text"
                     onChange={this.changeDescription}
                     placeholder="Enter Description Here"
                     className="DescriptionInput" />
                   <label className="Test-Label Label2" for="Test">Description</label>
           </div>
            <br/>

            <input type="submit" value="Save" className="Save" />

          </form>


      </div>
    )
  }
});

module.exports = Form;

// <form onSubmit={this.submitCB}>
//   <label>Name
//     <br/>
//     <input type="text" onChange={this.changeName} className="NameInput" />
//   </label>
//   <br/>
//
//   <label>Description
//     <br/>
//     <input type="text" onChange={this.changeDescription} className="DescriptionInput" />
//   </label>
//   <br/>
//
//   <input type="submit" value="Save" className="Save" />
//
// </form>
