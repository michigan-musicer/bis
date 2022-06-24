import './Main.css';
import './Portrait.js';
import Portrait from './Portrait.js';

import { NavLink } from "react-router-dom";

import Tooltip from '@mui/material/Tooltip';
import test_pango from '../imgs/portraits/test_pango.png';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';

// to start on 6/19
// routing
// filling in with proper data

// coding todos:
  // observation pages
  // methodology page (this should just be writing)
  
// non-technical todos:
  // randomize everyone so that they are unidentifiable even when looking through source
  // transcribe interviews (anticipate half hour each? and get through what you can)
  // fill in the excel sheet for interviews and upload that as csv
  // pick plants and pictures for plants and brief 1-2 sentence descriptions of plants
    // pics should be mostly square!
  // 


function Main() {
  // return (
  //   <Interview />
  // )
  // return (
  //   <div></div>
  // )

  let PortraitList = [];
  for (let i = 0; i < 40; ++i) {
    PortraitList.push(
      <li>
        <Tooltip title="test">
          {/* div is here to make tooltip work and does aboslutely nothing else */}
          <div>
            <Portrait img={test_pango}/>
          </div>
        </Tooltip>
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
        <p>This is a series of interviews collected from current undergraduates, graduate students, and alumni from the University of Michigan-Ann Arbor about their experiences with burnout and IS (imposter syndrome). This project was completed in the months of May and June of 2022.</p>
        {/* you really really should not be putting figures in the summary. but I feel like I should.  */}
        {/* <p>[]% of students said they experienced some degree of burnout at Michigan.</p>
        {/* include horizontal percent bars... */}
        {/* <p>[]% of students said they experienced some form of imposter syndrome at Michigan.</p> */}
        <p>[comment on demographics]</p>

        <p>Burnout and IS were prevalent among interviewees, but it's problematic put this into numbers. See "Observations" for fuller qualitative analysis and explanation of quantitative difficulties.</p> 
        {/* <p><b>Be skeptical of these figures.</b> One, my sample size is small and isn't representative of the student population. Two, a student saying they experienced burnout or IS doesn't mean that a mental health expert would agree. In particular with burnout, there seems to be both short-term, temporary burnout and long-term, more serious burnout, which I've attempted to separate.</p> */}

        <p>This project is not officially affiliated with or endorsed in any way by the University of Michigan. This project is not a formal research study and should not be cited as such. Please view all results in context of the methodology.</p>
        {/* <h4>Changelog</h4>
        <ul>
          <li><b>Date:</b> change</li>
        </ul> */}
      </div>
      <div id="interviews" className="main-interviews-div">
        <h2 className="section-title">Interviews</h2>
        <h3 className="interviews-random-button">
          Read a random interview
        </h3>
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
        <em>All observations here are my own; these are provided to attempt to condense some of the findings from this project. I am not a mental health professional and I am not qualified to give medical advice; I encourage you to draw your own conclusions.</em>
        <div className="main-observations-container">
          <a href="" className="card-container-anchor">
            <div className="main-observations-card">
              <p className="card-title">Qualitative Observations</p>
              <EmojiObjectsOutlinedIcon sx={{ color: 'white', fontSize: 150 }}/>
            </div>
          </a>
          <a href="" className="card-container-anchor">
            <div className="main-observations-card">
              <p className="card-title">Demographics and Quantitative Observations</p>
              <PieChartOutlinedIcon sx={{ color: 'white', fontSize: 150 }}/>
            </div>
          </a>
        </div>
      </div>
      <div id="methodology" className="main-methodology-div">
        <h2 className="section-title">Methodology</h2>
        <em>I'm providing this because I'd love to see this done elsewhere, and I want to suggest how others can improve on this. I've documented my approaches as well as my thoughts on improvements.</em>
        <div className="main-methodology-container">
          <a href="" className="card-container-anchor">
            <div className="main-methodology-card">
              <p className="card-title">Question Design</p>
              <QuestionMarkOutlinedIcon sx={{ color: 'white', fontSize: 150 }}/>
            </div>
          </a>
          <a href="" className="card-container-anchor">
          <div className="main-methodology-card">
            <p className="card-title">Interview Procedures</p>
            <ArticleOutlinedIcon sx={{ color: 'white', fontSize: 150 }}/>
          </div>
          </a>
          <a href="" className="card-container-anchor">
            <div className="main-methodology-card">
              <p className="card-title">Miscellaneous</p>
              <TerminalOutlinedIcon sx={{ color: 'white', fontSize: 150 }}/>
            </div>
          </a>
        </div>
      </div>
      <div id="acknowledgements" className="main-acknowledgements-div">
        <h2 className="section-title">Acknowledgements</h2>
        <p>Above all else, my sincerest thanks to everyone who shared their story with me. In hour-long conversations, you've taught me things I'd have taken years to learn on my own. I hope your words will help others too.</p>
        <p>Thank you to the people in my life, in college and outside of college, who celebrated my highs and kept me sane in my lows. You know who you are.</p>
        <p>Thank you to my therapist for helping me through my own experiences, as well as for offering informal guidance on the initial specs of this project.</p>
        <p>Thank you to my colleagues at my current internship for being supportive and interested in your intern's dinky little side project. It helped a lot to know that working adults cared to hear about these things too.</p>
      </div>
      <div id="contact" className="main-contact-div">
        <h2 className="section-title">Contact</h2>
        <p>I am staying anonymous. If you have questions, please contact me at thecourtmusician@gmail.com. Depending on what I want to do, I may deanonymize myself at a later date to claim this work.</p>
        {/* contact button here to copy-paste email */}
      </div>
    </div>
    
  );
}

export default Main;
