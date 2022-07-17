import React from 'react';
import ReactMarkdown from 'react-markdown';
import './MethMisc.css';
import SubpageNavbar from './SubpageNavbar';

class MethMisc extends React.Component {
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
      <div className="meth-misc-container">
        <SubpageNavbar title="Methodology miscellanea"/>
        <div className="meth-misc-text">
          <ReactMarkdown children={this.state.markdown}/>
        </div>
      </div>
    )
  }
}
  
  export default MethMisc;