import './Main.css';
import './Portrait.js';
import Portrait from './Portrait.js';

import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import test_pango from '../imgs/portraits/test_pango.png';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

import ReactMarkdown from 'react-markdown';
import main_summary from '../md/main/main-summary.md';
import main_observations from '../md/main/main-observations.md';
import main_methodology from '../md/main/main-methodology.md';
import main_acknowledgements from '../md/main/main-acknowledgements.md';
import main_contact from '../md/main/main-contact.md';

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

  let PortraitList = [];
  let numInterviews = 40;
  
  let randomInterviewIndex = Math.floor(Math.random() * numInterviews);
  for (let i = 0; i < numInterviews; ++i) {
    PortraitList.push(
      <li>
        <Portrait img={test_pango}/>
      </li>);
  }


  return (
    <div className="main-container">
      <div className="main-title-div">
        <header>
          <div className="main-title-text-div">
            <div className="main-title-text-primary-container"><h1 className="main-title-text-primary">Brilliant Little Fires</h1></div>
            <img src={test_pango}/>
          </div>
            <h2 className="main-title-text-secondary">An Interview Series on Burnout and Imposter Syndrome at the University of Michigan</h2>
        </header>
      </div>
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
        <h2 className="section-title">Interviews</h2>
        <Link to="/interview" style={{textDecoration: "none"}}>
          <h3 className="interviews-random-button">
            Read a random interview
          </h3>
        </Link>
        <div className="interviews-container">
          <ul className="interviews-list">
            {/* we don't need to change number of  */}
            {/* add tooltip that just gives animal name */}
            {PortraitList}
          </ul>
        </div>
      </div>
      <div id="observations" className="main-observations-div">
        <h2 className="section-title">Observations</h2>
        <ReactMarkdown children={observations}/>
        
        <div className="main-observations-container">
          <Link to="/observations_qualitative" style={{textDecoration: "none"}}>
            <div className="main-observations-card">
              <p className="card-title">Qualitative Observations</p>
              <EmojiObjectsOutlinedIcon sx={{ color: 'white', fontSize: 150 }}/>
            </div>
          </Link>
          <Link to="/observations_demographic_quantitative" style={{textDecoration: "none"}}>
            <div className="main-observations-card">
              <p className="card-title">Demographics and Quantitative Observations</p>
              <PieChartOutlinedIcon sx={{ color: 'white', fontSize: 150 }}/>
            </div>
          </Link>
        </div>
      </div>
      <div id="methodology" className="main-methodology-div">
        <h2 className="section-title">Methodology</h2>
        <ReactMarkdown children={methodology}/>
        <div className="main-methodology-container">
          <Link to="/methodology_question_design" style={{textDecoration: "none"}}>
            <div className="main-methodology-card">
              <p className="card-title">Question Design</p>
              <QuestionMarkOutlinedIcon sx={{ color: 'white', fontSize: 150 }}/>
            </div>
          </Link>
          <Link to="/methodology_interview_procedures" style={{textDecoration: "none"}}>
          <div className="main-methodology-card">
            <p className="card-title">Interview Procedures</p>
            <MicOutlinedIcon sx={{ color: 'white', fontSize: 150 }}/>
          </div>
          </Link>
          <Link to="/methodology_miscellanea" style={{textDecoration: "none"}}>
            <div className="main-methodology-card">
              <p className="card-title">Miscellaneous</p>
              <TerminalOutlinedIcon sx={{ color: 'white', fontSize: 150 }}/>
            </div>
          </Link>
          <Link to="/methodology_citations" style={{textDecoration: "none"}}>
            <div className="main-methodology-card">
              <p className="card-title">Citations</p>
              <ArticleOutlinedIcon sx={{ color: 'white', fontSize: 150 }}/>
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
    </div>
    
  );
}

export default Main;
