import React from 'react';
import './ObservationsLimits.css';
import ReactMarkDown from 'react-markdown';

import SubpageNavbar from './SubpageNavbar';

const text_md = '/md/obs-limits.md'

class ObservationsLimits extends React.Component {
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
      <div className="obs-limits-container">
        <SubpageNavbar title="Limitations"/>
        <div className="obs-limits-text">
          <ReactMarkDown children={this.state.markdown}/>
        </div>
      </div>
    )
  }
}
  
export default ObservationsLimits;