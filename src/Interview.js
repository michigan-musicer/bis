import React from 'react';
import './Interview.css';

class Interview extends React.Component {
  render() {
    
    // TODO: add links to other pages
    return (
    <div className="profile-container">
      <div className="profile-navbar-div">
        <div className="profile-navbar-left">
          <h3 className="profile-navbar-left-text">Back to homepage</h3>
        </div>
        <div className="profile-navbar-right">
          {/* this is not in the left container, but we do want the
          same difference (no left border) */}
          <h3 className="profile-navbar-left-text">Previous</h3>
          <h3 className="profile-navbar-right-item">Read a random interview</h3>
          <h3 className="profile-navbar-right-item">Next</h3>
        </div>
      </div>
      <div className="profile-content-container">
        <div className="profile-header">
          <div className="profile-picture">
            <img src={this.props.plant_img} className="profile-picture-image"/>
          </div>
          <div className="profile-info">
            <h1>Anonymous {this.props.info_plant_name}</h1>
            <ul>
              <li><b>Age:</b> {this.props.info_age}</li>
              <li><b>Academic standing:</b> {this.props.info_grade}</li>
              <li><b>School(s):</b> {this.props.info_school}</li>
              <li><b>Major(s and minors):</b> {this.props.info_subjects}</li>
            </ul>
          </div>
        </div>
        <div className="profile-interview">
          {/* what seems to be the best way to do this is read from a csv
          and alternate bold question, answer.  */}
          Placeholder text
        </div>
        <div className="profile-demographics">
          <h2>Demographic Information</h2>
          <ul>
            {/*             
            <li><b>GPA:</b> {this.props.demographics.gpa}</li>
            <li><b>Residency:</b> {this.props.demographics.residency}</li>
            {/* bullet below should only show up if residency is "International" */}
            {/* for home country,
            you should do an if before the return statement and use {} to enclose
            your variable. see https://reactjs.org/docs/conditional-rendering.html */}{/*}
            <li><b>Country of origin: </b> {this.props.demographics.country}</li>
            <li><b>Transfer student:</b> {this.props.demographics.transfer}</li>
            <li><b>Self-identified social class:</b> {this.props.demographics.social_class}</li>
            <li><b>First-gen:</b> {this.props.demographics.first_gen}</li>
            <li><b>Religious identification:</b> {this.props.demographics.religion}</li>
            <li><b>Ethnicity:</b> {this.props.demographics.ethnicity}</li>
            <li><b>Gender identity:</b> {this.props.demographics.gender}</li>
            <li><b>Sexual identity:</b> {this.props.demographics.sexuality}</li> */}
          </ul>
        </div>
        <div className="profile-plant-info">
          <it>{this.props.plant_info}</it>
        </div>
      </div>
    </div>
    )
  }
}

export default Interview;