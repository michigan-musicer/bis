import React from 'react';
import ReactMarkdown from 'react-markdown';
import './MethInterviewProcedures.css';
import SubpageNavbar from './SubpageNavbar';
// import text_md from '../md/meth-citations.md';

let text_md = '/md/meth-interview-proc.md'
class MethInterviewProcedures extends React.Component {
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
      <div className="meth-interview-procedures-container">
        <SubpageNavbar title="Interview procedures"/>
        <div className="meth-interview-procedures-text">
          <ReactMarkdown children={this.state.markdown}/>
        </div>
      </div>
    )
  }
}
  
  export default MethInterviewProcedures;