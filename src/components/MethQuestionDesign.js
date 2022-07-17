import React from 'react';
import ReactMarkdown from 'react-markdown';
import './MethQuestionDesign.css';
import SubpageNavbar from './SubpageNavbar';

class MethQuestionDesign extends React.Component {
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
      <div className="meth-question-design-container">
        <SubpageNavbar title="Question design"/>
        <div className="meth-question-design-text">
          <ReactMarkdown children={this.state.markdown}/>
        </div>
      </div>
    )
  }
}
  
  export default MethQuestionDesign;