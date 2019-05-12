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
            <h2 className="h2Tab">RESUME</h2>
        </div>
        <div className="PetOwner"onClick={this.toWorkPage}>
            <h2 className="h2Tab">DESIGN</h2>
        </div>
        <div className="PetOwner"onClick={this.toDevPage}>
            <h2 className="h2Tab">DEVELOPMENT</h2>
        </div>
      <div>
        <h3>RESUME</h3>
      </div>
          <main>
            <div class="center">
              <h2>Spyhouse Coffee Roasters</h2>
                <h4 className="h4Body">February 2018 to Present - Minneapolis, MN</h4>
              <h2>Tangerine Promotions</h2>
                <h4 className="h4Body">November 2012 to May 2016 - Northbrook, IL</h4>
              <h2>Mudd Advertising</h2>
                <h4 className="h4Body">Summer 2011 Internship - Cedar Falls, IA</h4>
              <h2>EDUCATION</h2>
                <h4 className="h4Body">Prime</h4>
                  <p>
                    Minneapolis, MN
                    1/19 - Present
                    <br/>
                    Full Stack Development
                  </p>
                <h4 className="h4Body">Wartburg College</h4>
                  <p>
                    Waverly, IA
                    08 - 12
                    <br/>
                    Communications
                  </p>
            <h2>SKILL SET</h2>
              <ul>
                <li>3.5 years professional graphic design experience (Photoshop,Illustrator,Indesign)</li>
                <li>I keep consistant and accurate files</li>
                <li>Experience with digital SLR cameras and photo editing</li>
                <li>I adapt quickly to change in work flow</li>
                <li>Strong written and verbal communicator</li>
                <li>I'm detail oriented</li>
                <li>Comfortable in a fast paced work environment</li>
                <li>I'm reliable - Employed remotely for a year</li>
              </ul>
          </div>
        </main>
      </div>
    </div>
);
}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(Resume));