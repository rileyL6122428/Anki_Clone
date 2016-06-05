var React = require('react');

var Test = React.createClass({
  render: function (){

    return(
      <div className="Test-Graph">

          <div className="Bars group">
            <div>
              <p className="Bar" style={{height: this.props.sunModPercentage + "%"} }>test</p>
              <wrapper style={{height: (100 - this.props.sunModPercentage) + "%"}}><num>{this.props.sunTotal}</num></wrapper>
            </div>
            <div>
              <p className="Bar" style={{height: this.props.monModPercentage + "%"} }>test</p>
              <wrapper style={{height: (100 - this.props.monModPercentage) + "%"}}><num>{this.props.monTotal}</num></wrapper>
            </div>
            <div>
              <p className="Bar" style={{height: this.props.tueModPercentage + "%"} }>test</p>
              <wrapper style={{height: (100 - this.props.tueModPercentage) + "%"}}><num>{this.props.tueTotal}</num></wrapper>
            </div>
            <div>
              <p className="Bar" style={{height: this.props.wedModPercentage + "%"} }>test</p>
              <wrapper style={{height: (100 - this.props.wedModPercentage) + "%"}}><num>{this.props.wedTotal}</num></wrapper>
            </div>
            <div>
              <p className="Bar" style={{height: this.props.thuModPercentage + "%"} }>test</p>
              <wrapper style={{height: (100 - this.props.thuModPercentage) + "%"}}><num>{this.props.thuTotal}</num></wrapper>
            </div>
            <div>
              <p className="Bar" style={{height: this.props.friModPercentage + "%"} }>test</p>
              <wrapper style={{height: (100 - this.props.friModPercentage) + "%"}}><num>{this.props.friTotal}</num></wrapper>
            </div>
            <div>
              <p className="Bar" style={{height: this.props.satModPercentage + "%"} }>test</p>
              <wrapper style={{height: (100 - this.props.satModPercentage) + "%"}}><num>{this.props.satTotal}</num></wrapper>
            </div>
          </div>

          <div className="Labels group">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>


    </div>
    );
  }
});

module.exports = Test;
