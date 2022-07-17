import React from 'react';
import ReactMarkdown from 'react-markdown';
import text_md from '../md/obs-qual.md';

import './ObservationsQual.css';
import SubpageNavbar from './SubpageNavbar';

class ObservationsQual extends React.Component {
  constructor(props) {
    super(props)

    this.state = { markdown: null }
  }

  componentDidMount() {
    fetch(text_md).then((response) => response.text()).then((text) => {
      this.setState({ markdown: text })
    })
  }
  
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