import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Resume.css';


class Resume extends Component {

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
            <h2>RESUME</h2>
        </div>
        <div className="PetOwner"onClick={this.toWorkPage}>
            <h2>DESIGN</h2>
        </div>
        <div className="PetOwner"onClick={this.toDevPage}>
            <h2>DEVELOPMENT</h2>
        </div>
      <div>
        <h3>RESUME</h3>

      </div>
      </div>
    </div>
);
}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(Resume));