import React from 'react';
import ReactMarkdown from 'react-markdown';
import './MethCitations.css';
import SubpageNavbar from './SubpageNavbar';
// import text_md from '../md/meth-citations.md';

let text_md = '/md/meth-citations.md'

class MethCitations extends React.Component {
  constructor(props) {
    super(props)

    this.state = { markdown: null }
  }

  componentDidMount() {
    fetch(text_md).then((response) => response.text()).then((text) => {
      this.setState({ markdown: text })
    })
    console.log(this.state.markdown)
  }
  
  render() {
    
    return (
      <div className="meth-interview-procedures-container">
        <SubpageNavbar title="Citations"/>
        <div className="meth-interview-procedures-text">
          <ReactMarkdown children={this.state.markdown}/>
        </div>
      </div>
    )
  }
}
  
  export default MethCitations;