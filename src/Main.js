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
      <div className="main-navbar-div">
        <p>Navbar</p>
      </div>
      <div className="main-summary-div">
        <h2>Summary</h2>
        <p>Text goes here.</p>
      </div>
      <div className="main-interviews-div">
        <h2>Interviews</h2>
        <p>Links to individual interviews go here. This will be a div of components.</p>
      </div>
      <div className="main-statistics-div">
        <h2>Statistics</h2>
        <p>Text goes here, probably more later.</p>
      </div>
      <div className="main-methodology-div">
        <h2>Methodology</h2>
        <p>Text goes here.</p>
      </div>
      <div className="main-contact-div">
        <h2>Contact</h2>
        <p>For the time being I will remain anonymous. If you have questions, feel free to contact me at thecourtmusician@gmail.com.</p>
      </div>
    </div>
    
  );
}

export default Main;
