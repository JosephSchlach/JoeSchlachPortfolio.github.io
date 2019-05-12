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