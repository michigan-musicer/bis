import React from 'react';
import ReactMarkdown from 'react-markdown';
import './MethInterviewProcedures.css';
import SubpageNavbar from './SubpageNavbar';

class MethInterviewProcedures extends React.Component {
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