import React, { Component, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './Interview.css';
import SubpageNavbar from './SubpageNavbar';
import Portrait from './Portrait';

import { getAllIntervieweeNames, getAllIntervieweeMap } from '../helpers/InterviewListHelpers.js';
// import test_pango from '/imgs/portraits/test_pango.png'

// import text_md from '../md/test.md';

import { useParams } from 'react-router-dom';


// public "imports"
const test_pango = '/imgs/portraits/test_pango.png'

// this is necessary to get id from route
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

function getDemographicInfo(demographic_info) {
  return demographic_info == null ? <em>Interviewee declined to publicly share demographic info.</em> : (
    <ul>
      {/* make this all ternaries and empty divs */}
      {demographic_info.gpa == null ? <div/> : <li><b>GPA:</b> {demographic_info.gpa}</li>}
      {demographic_info.residency == null ? <div/> : <li><b>Residency:</b> {demographic_info.residency}</li>}
      {/* bullet below should only show up if residency is "International"
      {/* for home country,
      you should do an if before the return statement and use {} to enclose
      your variable. see https://reactjs.org/docs/conditional-rendering.html */}
      {/* can I be lazy and put a 0 size div instead? */}
      {demographic_info.residency == "International" 
        ? <li><b>Country of origin:</b> {demographic_info.country == null ? <em>left blank</em> : demographic_info.country}</li>
        : <div/>
      }
      {demographic_info.transfer == null ? <div/> : <li><b>Transfer student:</b> {demographic_info.transfer}</li>}
      {demographic_info.social_class == null ? <div/> : <li><b>Self-identified social class:</b> {demographic_info.social_class}</li>}
      {demographic_info.first_gen == null ? <div/> : <li><b>First-gen:</b> {demographic_info.first_gen}</li>}
      {demographic_info.religion == null ? <div/> : <li><b>Religious identification:</b> {demographic_info.religion}</li>}
      {demographic_info.ethnicity == null ? <div/> : <li><b>Ethnicity:</b> {demographic_info.ethnicity}</li>}
      {demographic_info.gender == null ? <div/> : <li><b>Gender identity:</b> {demographic_info.gender}</li>}
      {demographic_info.sexuality == null ? <div/> : <li><b>Sexual identity:</b> {demographic_info.sexuality}</li>}
    </ul>
  );
}

function generateRandomInterviews(name_to_avoid) {
  const intervieweeNames = getAllIntervieweeNames();
  const intervieweeMap = getAllIntervieweeMap();

  let namesToUse = [];
  while (namesToUse.length < 3) {
    let randomIndex = Math.floor(Math.random() * 41);
    let newName = intervieweeNames[randomIndex];
    if (newName != name_to_avoid && !namesToUse.includes(newName)) {
      namesToUse.push(newName)
    }
  }

  return (
    <div className="profile-interviews-list">
      <Portrait props={{ name: namesToUse[0], props: intervieweeMap[namesToUse[0]] }}/>
      <Portrait props={{ name: namesToUse[1], props: intervieweeMap[namesToUse[1]] }}/>
      <Portrait props={{ name: namesToUse[2], props: intervieweeMap[namesToUse[2]] }}/>
    </div>)
}

class Interview extends React.Component {
  constructor(props) {
    super(props)

    // console.log(this.props)
    this.active = true;
    this.state = { markdown: null }
    // console.log(this.state)
  }

  // componentDidUpdate() {
  //   // import text_md from this.props.props.int_md;
  //   const path_md = this.props.props.int_md
  //   console.log(path_md)
  //   // fetch(text_md).then((response) => response.text()).then((text) => {
  //   // import(path_md)
    
  //   // import(this.props.props.int_md).then(resource => fetch(resource.default.then((response) => response.text()).then((text) => {
  //   //   this.setState({ markdown: text })
  //   // })
  //   // ));
  //   // console.log(this.state.markdown)
  // }

  componentDidMount() {
    fetch(this.props.props.path_md).then((response) => response.text()).then((text => this.setState({ markdown : text })));
    window.scrollTo(0, 0);
    this.active = false;
  }

  componentDidUpdate() {
    if (!this.active)
    {
      this.active = true;
      fetch(this.props.props.path_md).then((response) => response.text()).then((text => this.setState({ markdown : text })));
      window.scrollTo(0, 0);
    }
    else {
      this.active = false;
    }
  }

  render() {
    console.log(this.props.params.name);

    // should pick from the list of interviews and choose random ones that are NOT the current one
    // let PortraitList = [];
    // for (let i = 0; i < 3; ++i) {
    //   PortraitList.push(
    //     <li>
    //       <Portrait img={test_pango}/>
    //     </li>);
    // }

    const demographicInfo = getDemographicInfo(this.props.props.demographic_info)
    const PortraitList = generateRandomInterviews(this.props.name);

    // TODO: add links to other pages
    return (
    <div className="profile-container">
      <SubpageNavbar title={"Anonymous " + this.props.props.name}/>
      <div className="profile-content-container">
        <div className="profile-header">
          <div className="profile-picture">
            <img src={this.props.props.path_image} className="profile-picture-image"/>
          </div>
          <div className="profile-info">
            <h1>Anonymous {this.props.props.name}</h1>
            <ul>
              <li><b>Age:</b> {this.props.props.age}</li>
              <li><b>School:</b> {this.props.props.school}</li>
              <li><b>Academic standing:</b> {this.props.props.academic_standing}</li>
              <li><b>Program:</b> {this.props.props.program}</li>
            </ul>
            <div style={{fontSize: "large"}}>{this.props.props.animal_info}</div>
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
          {demographicInfo}
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

export default withParams(Interview);