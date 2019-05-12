import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class DesignWork extends Component {

toResumePage = () => {
  this.props.history.push(`/home`)
}

toWorkPage = () => {
  this.props.history.push(`/design`)
}

toDevPage = () => {
  this.props.history.push(`/dev`)
}


render() {
  return (
    <div>
      <div className="OwnerPet">
        <div className="PetOwner" onClick={this.toResumePage}>
            <h2 className="h2Tab">RESUME</h2>
        </div>
        <div className="PetOwner"onClick={this.toWorkPage}>
            <h2 className="h2Tab">DESIGN</h2>
        </div>
        <div className="PetOwner"onClick={this.toDevPage}>
            <h2 className="h2Tab">DEVELOPMENT</h2>
        </div>
      <div>
        <h3>DESIGN</h3>
        <div className="cardCenter">
            <div class="card">
              <div className="cardImage" onClick={this.toDamageNotation}>
                <img src="images/mudd.png" alt="Smiley face" height="200" width="200"></img>
              </div>
              <div>
                <h4 className="h4Card">Mudd Advertising</h4> 
                <p className="pCard">Style Guide</p> 
              </div>
            </div>
            <div class="card">
              <div className="cardImage">
                <img src="images/box.png" alt="Counter Unit for Diageo Liquor" height="200" width="200"></img>
              </div>
              <div>
                <h4 className="h4Card">Counter Unit</h4> 
                <p className="pCard">Designed for Diageo Liquor</p> 
              </div>
            </div>
            <div class="card">
              <div className="cardImage">
                <img src="images/MOMENT.png" alt="Cronkite Moment Poster" height="200" width="200"></img>
              </div>
              <div>
                <h4 className="h4Card">The Cronkite Moment</h4> 
                <p className="pCard">College Capstone Project</p> 
              </div>
            </div>
            <div class="card">
              <div className="cardImage">
              <img src="images/spacex.png" alt="Design for SpaceX" height="200" width="200"></img>
              </div>
              <div>
                <h4 className="h4Card">SpaceX T-Shirt</h4> 
                <p className="pCard">Launch Shirt Concept</p> 
              </div>
            </div>
      </div>
      </div>
      </div>
    </div>
);
}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(DesignWork));