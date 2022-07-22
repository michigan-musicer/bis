import './Main.css';

import Portrait from './Portrait.js';

import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

import { getAllIntervieweeNames, getAllIntervieweeMap, getAllAlumniNames, getAllGradStudentNames, getAllSeniorNames, getAllJuniorNames } from '../helpers/InterviewListHelpers.js'

const main_summary = '/md/main/main-summary.md';
const main_observations = '/md/main/main-observations.md';
const main_methodology = '/md/main/main-methodology.md';
const main_acknowledgements = '/md/main/main-acknowledgements.md';
const main_contact = '/md/main/main-contact.md';

const main_header_image = '/imgs/header.png';

const numInterviews = 41;
const numGraduateStudents = 11;
const numAlumni = 11;
const numSeniors = 14;
const numJuniors = 5;

function getRandomInterviewName(listOfNames) {
  const randomIndex = Math.floor(Math.random() * numInterviews);
  return listOfNames[randomIndex]
}

function Main() {
  const [summary, setSummary] = useState(null);
  const [observations, setObservations] = useState(null);
  const [methodology, setMethodology] = useState(null);
  const [acknowledgements, setAcknowledgements] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(()=> {
    fetch(main_summary)
      .then((response) => response.text())
      .then((main_summary_md_temp) => {
        setSummary(main_summary_md_temp)
      })
    fetch(main_observations)
      .then((response) => response.text())
      .then((main_observations_md_temp) => {
        setObservations(main_observations_md_temp)
      })
    fetch(main_methodology)
      .then((response) => response.text())
      .then((main_methodology_md_temp) => {
        setMethodology(main_methodology_md_temp)
      })
    fetch(main_acknowledgements)
      .then((response) => response.text())
      .then((main_acknowledgements_md_temp) => {
        setAcknowledgements(main_acknowledgements_md_temp)
      })
    fetch(main_contact)
      .then((response) => response.text())
      .then((main_contact_md_temp) => {
        setContact(main_contact_md_temp) 
      })
    }
  )

  let GraduateStudentsList = [], AlumniList= [], SeniorsList = [], JuniorsList = [];
  const GraduateStudentsNamesList = getAllGradStudentNames(), 
    AlumniNamesList = getAllAlumniNames(), 
    SeniorsNamesList = getAllSeniorNames(), 
    JuniorsNamesList = getAllJuniorNames();
    
  // let 
  const IntervieweeMap = getAllIntervieweeMap();

  const randomName = getRandomInterviewName(getAllIntervieweeNames());
  const randomInterviewProps = { name: randomName, props: IntervieweeMap[randomName]};


  GraduateStudentsNamesList.forEach(name => {
    GraduateStudentsList.push(
      <li>
        <Portrait props={{ name: name, props: IntervieweeMap[name] }}/>
      </li>
    );
  });
  AlumniNamesList.forEach(name => {
    AlumniList.push(
      <li>
        <Portrait props={{ name: name, props: IntervieweeMap[name] }}/>
      </li>
    );
  });
  SeniorsNamesList.forEach(name => {
    SeniorsList.push(
      <li>
        <Portrait props={{ name: name, props: IntervieweeMap[name] }}/>
      </li>
    );
  });
  JuniorsNamesList.forEach(name => {
    JuniorsList.push(
      <li>
        <Portrait props={{ name: name, props: IntervieweeMap[name] }}/>
      </li>
    );
  });

  return (
    <div className="main-container">
      <div className="main-title-div">
        {/* <> */}
          <div className="main-title-quotes-container">
            <div style={{width: "435px"}}/>
          </div>
          <div className="main-title-text-div">
            <div className="main-title-text-primary-container">
              <h1 className="main-title-text-primary">Brilliant Little Fires</h1>
              <h2 className="main-title-text-secondary">An Interview Series on Burnout and Imposter Syndrome at the University of Michigan</h2>
            </div>
          </div>
          <div className="main-title-image-container">
            <img className="main-title-image-primary" src={main_header_image}/>
          </div>
      </div>
      {/* </div> */}
      {/* <div className="main-navbar-container-div"> */}
        <div className="main-navbar-div">
          <h3 className="navbar-item-first"><a href="#summary">Summary</a></h3> 
          <h3 className="navbar-item"><a href="#interviews">Interviews</a></h3>
          <h3 className="navbar-item"><a href="#observations">Observations</a></h3>
          <h3 className="navbar-item"><a href="#methodology">Methodology</a></h3>
          <h3 className="navbar-item"><a href="#acknowledgements">Acknowledgements</a></h3>
          <h3 className="navbar-item"><a href="#contact">Contact</a></h3>
        </div>
      {/* </div> */}
      <div id="summary" className="main-summary-div">
        <h2 className="section-title">Summary</h2>
        <ReactMarkdown children={summary}/>
        {/* <h4>Changelog</h4>
        <ul>
          <li><b>Date:</b> change</li>
        </ul> */}
      </div>
      <div id="interviews" className="main-interviews-div">
        <h1 className="section-title" style={{}}>Interviews</h1>
        <Link to={"/interview/" + randomInterviewProps.name} props={randomInterviewProps} style={{textDecoration: "none"}}>
          {/* this doesn't return a different interview every time if you stay on the same page */}
          {/* too bad! */}
          <h3 className="interviews-random-button">
            Read a random interview
          </h3>
        </Link>
        <div className="interviews-container">
          <div className="interviews-subsection">
            <h2 className="interviews-subsection-title">Graduate students</h2>
              <ul className="interviews-list">
                {GraduateStudentsList}
              </ul>
          </div>
          <div className="interviews-subsection">
          {/* order below grad students but specify recent alumni */}
            <h2 className="interviews-subsection-title">Alumni</h2>
              <ul className="interviews-list">
                {AlumniList}
              </ul>
          </div>
          <div className="interviews-subsection">
            <h2 className="interviews-subsection-title">Undergraduate seniors</h2>
              <ul className="interviews-list">
                {SeniorsList}
              </ul>
          </div>
          <div className="interviews-subsection">
            <h2 className="interviews-subsection-title">Undergraduate juniors and below</h2>
              <ul className="interviews-list">
                {JuniorsList}
              </ul>
          </div>

        </div>
      </div>
      <div id="observations" className="main-observations-div">
        <h2 className="section-title">Observations</h2>
        <ReactMarkdown children={observations}/>
        <div className="main-observations-container">
          <Link to="/observations_demographic" style={{textDecoration: "none", color: "#FFFFFF"}}>
            <div className="main-observations-card">
              <p className="card-title">Demographics</p>
              {/* sx={{ color: 'white', fontSize: 150 }} */}
              <PieChartOutlinedIcon className="card-icon"/>
            </div>
          </Link>
          <Link to="/observations_qualitative" style={{textDecoration: "none", color: "#FFFFFF"}}>
            <div className="main-observations-card">
              <p className="card-title">11 Selected Observations</p>
              <EmojiObjectsOutlinedIcon className="card-icon"/>
            </div>
          </Link>
          <Link to="/observations_limitations" style={{textDecoration: "none", color: "#FFFFFF"}}>
            <div className="main-observations-card">
              <p className="card-title">Limitations</p>
              <ReportProblemOutlinedIcon className="card-icon"/>
            </div>
          </Link>
        </div>
      </div>
      <div id="methodology" className="main-methodology-div">
        <h2 className="section-title">Methodology</h2>
        <ReactMarkdown children={methodology}/>
        <div className="main-methodology-container">
          <Link to="/methodology_question_design" style={{textDecoration: "none", color: "#FFFFFF"}}>
            <div className="main-methodology-card">
              <p className="card-title">Question Design</p>
              <QuestionMarkOutlinedIcon className="card-icon"/>
            </div>
          </Link>
          <Link to="/methodology_interview_procedures" style={{textDecoration: "none", color: "#FFFFFF"}}>
          <div className="main-methodology-card">
            <p className="card-title">Interview Procedures</p>
            <MicOutlinedIcon className="card-icon"/>
          </div>
          </Link>
          <Link to="/methodology_miscellanea" style={{textDecoration: "none", color: "#FFFFFF"}}>
            <div className="main-methodology-card">
              <p className="card-title">Miscellaneous</p>
              <TerminalOutlinedIcon className="card-icon"/>
            </div>
          </Link>
          <Link to="/methodology_citations" style={{textDecoration: "none", color: "#FFFFFF"}}>
            <div className="main-methodology-card">
              <p className="card-title">Citations</p>
              <ArticleOutlinedIcon className="card-icon"/>
            </div>
          </Link>
        </div>
      </div>
      <div id="acknowledgements" className="main-acknowledgements-div">
        <h2 className="section-title">Acknowledgements</h2>
        <ReactMarkdown children={acknowledgements}/>
      </div>
      <div id="contact" className="main-contact-div">
        <h2 className="section-title">Contact</h2>
        <ReactMarkdown children={contact}/>
      </div>
      <div className="main-footer-div">
        <img className="main-footer-img" src="imgs/logo.png"/>
      </div>
    </div>
  );
}

export default Main;
