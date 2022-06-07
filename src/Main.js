import './Main.css';
import './Portrait.js';
import Portrait from './Portrait.js';
import Interview from './Interview';
import test_pango from './imgs/portraits/test_pango.png';

// job for Friday 5/20: take care of the interview portraits grid 
  // you'll need a portrait component for this
  // also take care of excel sheet to convert into CSV to read from -- although it might be overengineering and you might prefer copypasta
  // if time, work on the hover textbox that shows up when we are at the right scroll on the page
// job for Saturday 5/21: create interviewee page
// job for Sunday 5/22: figure out how to route
// undefined timelines for now: figure out a hosting method, fill with test data, and verify that stuff looks good 

function Main() {
  return (
    <Interview />
  )

  let PortraitList = [];
  for (let i = 0; i < 40; ++i) {
    PortraitList.push(<li><Portrait img={test_pango}/></li>);
  }


  return (
    <div className="main-container">
      <img src={test_pango}/>
      <div className="main-title-div">
        <header>
          <div className="main-title-text-div">
            <h1 >Brilliant Little Fires</h1>
          </div>
          <div className="main-title-text-div">
            <h3 >An Informal Investigation of Burnout and Imposter Syndrome at the University of Michigan</h3>
          </div>
        </header>
      </div>
      {/* <div className="main-navbar-container-div"> */}
        <div className="main-navbar-div">
          <h3 className="navbar-item-first"><a href="#summary">Summary</a></h3> 
          <h3 className="navbar-item"><a href="#interviews">Interviews</a></h3>
          <h3 className="navbar-item"><a href="#observations">Observations</a></h3>
          <h3 className="navbar-item"><a href="#methodology">Methodology</a></h3>
          <h3 className="navbar-item"><a href="#disclaimers">Disclaimers</a></h3>
          <h3 className="navbar-item"><a href="#contact">Contact</a></h3>
        </div>
      {/* </div> */}
      <div id="summary" className="main-summary-div">
        <h2 className="section-title">Summary</h2>
        <p>Text goes here.</p>
      </div>
      <div id="interviews" className="main-interviews-div">
        <h2 className="section-title">Interviews</h2>
        <h3 className="interviews-random-button">
          Read a random interview
        </h3>
        <div className="interviews-container">
          <ul className="interviews-list">
            {/* we don't need to change number of  */}
            {PortraitList}
          </ul>
          {/* fade in and out would be nice. But requires some JS */}
          <div className="interviews-preview-container">
            <p className="interviews-preview-text">Test text</p>
          </div>
        </div>
      </div>
      <div id="observations" className="main-observations-div">
        <h2 className="section-title">Observations</h2>
        <p>Text goes here, probably more later.</p>
      </div>
      <div id="methodology" className="main-methodology-div">
        <h2 className="section-title">Methodology</h2>
        <p>Text goes here.</p>
      </div>
      <div id="disclaimers" className="main-disclaimer-div">
        <h2 className="section-title">Disclaimers</h2>
        <p>Text goes here.</p>
      </div>
      <div id="contact" className="main-contact-div">
        <h2 className="section-title">Contact</h2>
        <p>Talking about burnout can damage one's career prospects: <a href='https://www.sciencedirect.com/science/article/pii/S1570677X21000745#:~:text=Highlights&text=Former%20burnout%20patients%20have%20reduced,a%20history%20of%20physical%20injury.&text=Revealing%20a%20history%20of%20burnout,with%20the%20known%20burnout%20stigma.'>revealing a history of burnout generally reduces a candidate's chance to be hired</a>. Because of this, I have granted all interviewees anonymity by default, and for the same reason, I am also remaining anonymous.</p> 
        <p>If you have questions, feel free to contact me at thecourtmusician@gmail.com. Depending on what I want to do, I may deanonymize myself at a later date to claim this work.</p>
      </div>
    </div>
    
  );
}

export default Main;
