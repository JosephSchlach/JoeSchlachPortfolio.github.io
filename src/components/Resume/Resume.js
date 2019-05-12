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
              <h2>PRIME DIGITAL ACADEMY</h2>
                <h4 className="h4Body">January 2019 - Present | Minneapolis, MN</h4>
                  <ul>
                  <li>- Studying HTML, CSS, JavaScript, JQuery, React, SQL</li>
                  <li>- Designing applications and user interfaces</li>
                  <li>- Developing a solo application with a local non-profit in mind</li>
                  <li>- Once graduated I will have produced an application for local business</li>
                  <li>- Training soft skills like public speaking and collaboration</li>
                  </ul>
              <h2>SPYHOUSE COFFEE ROASTERS</h2>
                <h4 className="h4Body">February 2018 - March 2019 | Minneapolis, MN</h4>
                  <ul>
                    <li>- Establlished relationships with customers providing quality cusomer service</li>
                    <li>- Improved team morale during leadership transitions</li>
                    <li>- Took part in diversity training</li>
                    <li>- Flexible with adapting to working in multiple locations and times of day</li>
                  </ul>
              <h2>Dunn Brothers Coffee</h2>
                <h4 className="h4Body">July 2016 to July 2017 | Minneapolis, MN</h4>
                  <ul>
                    <li>- Learned the basics of how to run a coffee shop</li>
                    <li>- Strong emphasis on communication</li>
                    <li>- Problem solving, both customer facing and with staff</li>
                    <li>- Prioritized customer service and positivity</li>
                  </ul>
              <h2>Tangerine Promotions</h2>
                <h4 className="h4Body">November 2012 to May 2016 | Northbrook, IL</h4>
                  <ul>
                    <li>- Contributed graphic design work to campaigns for Diageo Liquor</li>
                    <li>- Worked in a fast pace environment and adapted to changes</li>
                    <li>- Developed design skills both software related as well as workflow related</li>
                    <li>- Gained a wide array of soft skills important for contributing to teams</li>
                  </ul>
                  <br />
              <h2>EDUCATION</h2>
              <div className='eduDiv'>
                <div className="eduCard">
                <h4 className="h4Body">Prime</h4>
                  <p>
                    Minneapolis, MN
                    <br/>
                    1/19 - Present
                    <br/>
                    Full Stack Development
                  </p>
                  </div>
                  <div className="eduCard">
                <h4 className="h4Body">Wartburg College</h4>
                  <p>
                    Waverly, IA
                    <br/>
                    2008 - 2012
                    <br/>
                    Communications
                  </p>
                  </div>
                  </div>
                  <br />
            <h2>SKILLS</h2>
              <div className='skillsDiv'>
                <div className="skillCard">
                  <h4 className="h4Body">Design</h4>
                    <ul>
                      <li>- Adobe Suite</li>
                      <li>- Print and Digital</li>
                      <li>- Usability</li>
                      <li>- Wire Framing</li>
                      <li>- 3D Modeling</li>
                    </ul>
                </div>
                <div className="skillCard">
                  <h4 className="h4Body">Development</h4>
                    <ul>
                      <li>- HTML</li>
                      <li>- CSS</li>
                      <li>- React</li>
                      <li>- jQuery</li>
                      <li>- JavaScript</li>
                    </ul>
                </div>
                <div className="skillCard">
                  <h4 className="h4Body">Professional</h4>
                    <ul>
                      <li>- Communication</li>
                      <li>- Critical Thinking</li>
                      <li>- Teamwork</li>
                      <li>- Leadership</li>
                      <li>- Empathy</li>
                    </ul>
                </div>
                </div>
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