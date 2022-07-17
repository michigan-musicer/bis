import React from 'react';
import './ObservationsDemoQuant.css';
import ReactMarkDown from 'react-markdown';

import SubpageNavbar from './SubpageNavbar';
import test from '../md/test.md';


class ObservationsDemoQuant extends React.Component {
  constructor(props) {
    super(props)

    this.state = { markdown: null }
  }

  componentDidMount() {
    fetch(test).then((response) => response.text()).then((text) => {
      this.setState({ markdown: text })
    })
    console.log(this.state.markdown)
  }
  
  render() {
    

    return (
      <div className="obs-demo-quant-container">
        <SubpageNavbar title="Demographic and quantitative observations"/>
        <div className="obs-demo-quant-text">
          <ReactMarkDown children={this.state.markdown}/>
        </div>
      </div>
    )
  }
}
  
export default ObservationsDemoQuant;