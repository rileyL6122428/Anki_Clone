var React = require('react');

var Test = React.createClass({
  render: function (){
    return(
      <div className="Test-Graph">

          <div className="Bars group">

            <div>
              <p className="Bar"
                 style={{height: this.props.sunModifiedPercentage + "%"} }>
              </p>
              <wrapper style={{height: (100 - this.props.sunModifiedPercentage) + "%"}}>
                <num>{this.props.sunTotal}</num>
              </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: this.props.monModifiedPercentage + "%"} }>
              </p>
              <wrapper style={{height: (100 - this.props.monModifiedPercentage) + "%"}}>
                <num>{this.props.monTotal}</num>
                </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: this.props.tueModifiedPercentage + "%"} }>
              </p>
              <wrapper style={{height: (100 - this.props.tueModifiedPercentage) + "%"}}>
                <num>{this.props.tueTotal}</num>
                </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: this.props.wedModifiedPercentage + "%"} }>
              </p>
              <wrapper style={{height: (100 - this.props.wedModifiedPercentage) + "%"}}>
                <num>{this.props.wedTotal}</num>
                </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: this.props.thuModifiedPercentage + "%"} }>
              </p>
              <wrapper style={{height: (100 - this.props.thuModifiedPercentage) + "%"}}>
                <num>{this.props.thuTotal}</num>
                </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: this.props.friModifiedPercentage + "%"} }>
              </p>
              <wrapper style={{height: (100 - this.props.friModifiedPercentage) + "%"}}>
                <num>{this.props.friTotal}</num>
                </wrapper>
            </div>

            <div>
              <p className="Bar"
                 style={{height: this.props.satModifiedPercentage + "%"} }>
              </p>
              <wrapper style={{height: (100 - this.props.satModifiedPercentage) + "%"}}>
                <num>{this.props.satTotal}</num>
                </wrapper>
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
