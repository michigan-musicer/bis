import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Interview from './Interview.js'
import { getAllIntervieweeNames, getAllIntervieweeMap, getAllAlumniNames, getAllGradStudentNames, getAllSeniorNames, getAllJuniorNames, getTestName, getTestMap } from '../helpers/InterviewListHelpers.js'

import { useParams } from 'react-router-dom';

// this is necessary to get id from route
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

// function getTextMd(path) {
// // import(this.state.path_md)
// // // import('../md/test.md')
//   console.log(path)
//   // import(path)
//   // .then(responseModule => {
//   //   console.log(responseModule)
//     // fetch(responseModule.default)
//   fetch(path)
//     .then(response => response.text())
//       .then(text => text)
//     .catch(err => console.log(err));
//   // })
//   // .catch(err => console.log(err))
// }

class InterviewGuard extends React.Component {
  render() {
    const nameInUrl = this.props.params.name;

    const validNames = getAllIntervieweeNames();
    let validNamesMap = getAllIntervieweeMap();

    // console.log(validNamesMap)
    // if (validNames.some(name => name === nameInUrl)) {
    //   validNamesMap[nameInUrl]['text_md'] = getTextMd(validNamesMap[nameInUrl]['path_md'])
    // }

    // console.log(validNamesMap)
    // TODO: add links to other pages
    return (
      validNames.some(name => name === nameInUrl) 
        ? <Interview props={validNamesMap[nameInUrl]}/>
        : <p>invalid page</p>
    )
    // return <p>bleh</p>
  }
}

export default withParams(InterviewGuard);