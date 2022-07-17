import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Interview.css';
import SubpageNavbar from './SubpageNavbar';
import Portrait from './Portrait';
import test_pango from '../imgs/portraits/test_pango.png'

class Interview extends React.Component {
  constructor(props) {
    super(props)

    this.state = { markdown: null }
  }

  componentDidMount() {
    fetch(test).then((response) => response.text()).then((text) => {
      this.setState({ markdown: text })
    })
    console.log(this.state.markdown)
  }
  
  render() {
    // should pick from the list of interviews and choose random ones that are NOT the current one
    let PortraitList = [];
    for (let i = 0; i < 3; ++i) {
      PortraitList.push(
        <li>
          <Portrait img={test_pango}/>
        </li>);
    }


    // TODO: add links to other pages
    return (
    <div className="profile-container">
      <SubpageNavbar title="Test"/>
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
              <em>{this.props.animal_info}</em>
            </ul>
          </div>
        </div>
        {/* <div className="profile-plant-info">
          <it></it>
        </div> */}
        <div className="profile-interview">
          {/* what seems to be the best way to do this is read from a csv
          and alternate bold question, answer.  */}
          <ReactMarkdown children={this.state.markdown}/>
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
        <div className="profile-other-interviews-random">
            <h2>Read another interview</h2>
            <ul className="profile-interviews-list">
              {PortraitList}
            </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default Interview;