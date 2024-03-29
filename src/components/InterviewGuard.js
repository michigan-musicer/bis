import React from 'react';

import Interview from './Interview.js'
import { getAllIntervieweeNames, getAllIntervieweeMap } from '../helpers/InterviewListHelpers.js'

import { useParams } from 'react-router-dom';

// this is necessary to get id from route
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class InterviewGuard extends React.Component {
  render() {
    const nameInUrl = this.props.params.name;

    const validNames = getAllIntervieweeNames();
    let validNamesMap = getAllIntervieweeMap();

    return (
      validNames.some(name => name === nameInUrl) 
        ? <Interview props={validNamesMap[nameInUrl]}/>
        : <p>invalid page</p>
    )
  }
}

export default withParams(InterviewGuard);