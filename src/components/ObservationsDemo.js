import React from 'react';
import './ObservationsDemo.css';
import ReactMarkDown from 'react-markdown';

import SubpageNavbar from './SubpageNavbar';

let text_md = '/md/obs-demo.md'
class ObservationsDemo extends React.Component {
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
      <div className="obs-demo-quant-container">
        <SubpageNavbar title="Demographics"/>
        <div className="obs-demo-quant-text">
          <ReactMarkDown children={this.state.markdown}/>
        </div>
      </div>
    )
  }
}
  
export default ObservationsDemo;