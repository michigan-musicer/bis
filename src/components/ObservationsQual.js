import React from 'react';
import ReactMarkdown from 'react-markdown';

import './ObservationsDemoQuant.css';
import SubpageNavbar from './SubpageNavbar';

class ObservationsQual extends React.Component {
  constructor(props) {
    super(props)

    this.state = { markdown: null }
  }

  // componentDidMount() {
  //   fetch(test).then((response) => response.text()).then((text) => {
  //     this.setState({ markdown: text })
  //   })
  //   console.log(this.state.markdown)
  // }
  
  render() {
    
    return (
      <div className="obs-qual-container">
        <SubpageNavbar title="Qualitative observations"/>
        <div className="obs-qual-text">
          <ReactMarkdown children={this.state.markdown}/>
        </div>
      </div>
    )
  }
}
  
  export default ObservationsQual;