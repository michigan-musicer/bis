import './Main.css';

function Main() {
  return (
    <div className="main-container">
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
          <h3 className="navbar-item"><a href="#disclaimer">Disclaimer</a></h3>
          <h3 className="navbar-item"><a href="#contact">Contact</a></h3>
        </div>
      {/* </div> */}
      <div id="summary" className="main-summary-div">
        <h2 className="section-title">Summary</h2>
        <p>Text goes here.</p>
      </div>
      <div id="interviews" className="main-interviews-div">
        <h2 className="section-title">Interviews</h2>
        <p>Links to individual interviews go here. This will be a div of components.</p>
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
        <p>For the time being I will remain anonymous. If you have questions, feel free to contact me at thecourtmusician@gmail.com.</p>
      </div>
    </div>
    
  );
}

export default Main;
